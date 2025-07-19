import type { APIRoute } from 'astro'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

// Marcar como server-rendered para permitir POST requests
export const prerender = false

// Definir el tipo para los datos del formulario
interface FormSubmission {
  id: string
  timestamp: string
  formId: string
  data: Record<string, any>
  userAgent?: string
  ip?: string
}

// Ruta donde se guardarán las submisiones
const SUBMISSIONS_FILE = join(process.cwd(), 'form-submissions.json')

// Función para leer las submisiones existentes
function getExistingSubmissions(): FormSubmission[] {
  if (!existsSync(SUBMISSIONS_FILE)) {
    return []
  }
  
  try {
    const data = readFileSync(SUBMISSIONS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading submissions file:', error)
    return []
  }
}

// Función para guardar una nueva submisión
function saveSubmission(submission: FormSubmission): void {
  const submissions = getExistingSubmissions()
  submissions.push(submission)
  
  try {
    writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
  } catch (error) {
    console.error('Error saving submission:', error)
    throw error
  }
}

// Función para generar un ID único
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que sea una petición POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Method not allowed' 
      }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // Obtener los datos JSON del body
    const data = await request.json()
    
    // Crear la submisión
    const submission: FormSubmission = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      formId: data.formId || 'unknown',
      data: data,
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    }

    // Guardar la submisión
    saveSubmission(submission)

    // Respuesta exitosa
    return new Response(JSON.stringify({
      success: true,
      message: 'Formulario enviado correctamente',
      submissionId: submission.id
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  } catch (error) {
    console.error('Error processing form submission:', error)
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Error interno del servidor'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

// Opcional: endpoint GET para obtener las submisiones (solo en desarrollo)
export const GET: APIRoute = async ({ url }) => {
  // Solo permitir en desarrollo
  if (import.meta.env.PROD) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Not available in production'
    }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  try {
    const submissions = getExistingSubmissions()
    
    return new Response(JSON.stringify({
      success: true,
      submissions: submissions,
      count: submissions.length
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Error retrieving submissions'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
