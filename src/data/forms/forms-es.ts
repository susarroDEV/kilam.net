import type { FormConfig } from "@/types/formsTypes"

export const contactFormConfig_ES : FormConfig  = {
  id: "contact-form",
  name: "contact-form",
  sections: [
    {
      title: "Información de contacto",
      description: "Por favor, proporciónanos un método de contacto para poder comunicarnos contigo.",
      fields: [
        {
          id: "name",
          label: "Nombre para referirnos a ti",
          type: "text",
          placeholder: "Ej. Kimani",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Por favor, introduce un nombre válido."
          }
        },
        {
          id: "communication-method",
          label: "Método de comunicación",
          type: "select",
          placeholder: "Selecciona un método",
          required: true,
          options: [
            { value: "email", label: "Email" },
            { value: "discord", label: "Discord" },
            { value: "twitter", label: "X / Twitter" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un método de comunicación."
          }
        },
        {
          id: "communication-detail",
          label: "Detalles de contacto",
          type: "text",
          placeholder: "Ej. @LucasOA8",
          required: true,
          validation: {
            maxLength: 100,
            errorMessage: "Por favor, proporciona un contacto válido."
          }
        }
      ]
    },
    {
      title: "Información del proyecto",
      description: "Detalla el proyecto o la consulta que deseas realizar.",
      fields: [
        {
          id: "project-type",
          label: "Tipo de proyecto",
          type: "select",
          placeholder: "Selecciona un tipo de proyecto",
          required: true,
          options: [
            { value: "event", label: "Evento" },
            { value: "series", label: "Serie" },
            { value: "video", label: "Video" },
            { value: "other", label: "Otro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un tipo de proyecto."
          }
        },
        {
          id: "estimated-players",
          label: "Número estimado de jugadores",
          type: "number",
          placeholder: "Ej. 10",
          required: false,
          validation: {
            errorMessage: "Por favor, introduce un número válido de jugadores."
          }
        },
        {
          id: "project-description",
          label: "Descripción del proyecto",
          type: "textarea",
          placeholder: "Ej. Este proyecto trata sobre...",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona una descripción válida (entre 20 y 500 caracteres)."
          }
        },
        {
          id: "extra-details",
          label: "Especificaciones técnicas adicionales",
          type: "textarea",
          placeholder: "Ej. Mods, resource pack, etc.",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Por favor, proporciona detalles adicionales válidos (máximo 300 caracteres)."
          }
        }
      ]
    },
    {
      title: "Información adicional",
      description: "Proporciona información relevante para tu propuesta que no hayas especificado anteriormente.",
      fields: [
        {
          id: "budget",
          label: "Presupuesto aproximado",
          type: "text",
          placeholder: "Ej. 200€",
          required: false,
          validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Por favor, introduce un presupuesto válido (número con hasta dos decimales)."
          }
        },
        {
          id: "project-date",
          label: "Fecha aproximada",
          type: "text",
          placeholder: "Ej. 30-04-2004",
          required: false,
          validation: {
            pattern: "^\\d{2}-\\d{2}-\\d{4}$",
            errorMessage: "Por favor, introduce una fecha válida (DD-MM-AAAA)."
          }
        },
        {
          id: "additional-comments",
          label: "Comentarios adicionales",
          type: "textarea",
          placeholder: "Ej. Este proyecto tiene como objetivo...",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Por favor, proporciona comentarios adicionales válidos (máximo 300 caracteres)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar propuesta",
  successMessage: "¡Gracias por contactarnos! Te responderemos lo antes posible.",
  errorMessage: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
  action: "#", // Simulación de envío para demo
  method: "POST",  
  className: "contact-form"
}

export const postulateFormConfig_ES: FormConfig = {
  id: "postulate-form",
  name: "postulate-form",
  sections: [
    {
      title: "Información personal",
      description: "Cuéntanos un poco sobre ti para conocerte mejor.",
      fields: [
        {
          id: "name",
          label: "Nombre para referirnos a ti",
          type: "text",
          placeholder: "Ej. Albert",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Por favor, introduce un nombre válido."
          }
        },
        {
          id: "discord-tag",
          label: "Discord Tag",
          type: "text",
          placeholder: "Ej. meliory2",
          required: true,
          validation: {
            maxLength: 20,
            errorMessage: "Por favor, proporciona un Discord Tag válido."
          }
        },
        {
          id: "other-socials",
          label: "Otras redes",
          type: "text",
          placeholder: "Ej. X: @Meliory2 | Ig: @albert_sanchez_20",
          required: false,
          validation: {
            maxLength: 100,
            errorMessage: "Por favor, proporciona redes sociales válidas."
          }
        },
        {
          id: "age",
          label: "Edad",
          type: "number",
          placeholder: "Ej. 21",
          required: true,
          validation: {
            errorMessage: "Por favor, introduce una edad válida."
          }
        },
        {
          id: "found-way",
          label: "¿Cómo has conocido a KILAM?",
          type: "textarea",
          placeholder: "Ej. Viendo a mi streamer favorito",
          required: false,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Por favor, proporciona una respuesta válida (entre 10 y 200 caracteres)."
          }
        }
      ]
    },
    {
      title: "Aptitudes y experiencia",
      description: "Cuéntanos más acerca de tus habilidades más destacadas y tu experiencia previa.",
      fields: [
        {
          id: "scope",
          label: "¿A que ámbito postulas principalmente?",
          type: "select",
          placeholder: "Selecciona un ámbito",
          required: true,
          options: [
            { value: "building", label: "Construcción" },
            { value: "modeling", label: "Modelado" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desarrollo" },
            { value: "configuration", label: "Configuración de Software" },
            { value: "digital-design", label: "Diseño Digital" },
            { value: "video-editing", label: "Edición de Video" },
            { value: "data-packing", label: "Comandos y Data Packs" },
            { value: "server-management", label: "Gestión de Servidores" },
            { value: "music", label: "Música o audio" },
            { value: "other", label: "Otro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un ámbito."
          }
        },
        {
          id: "alternative-scope",
          label: "¿Tienes aptidudes en otro ámbitos?",
          type: "select",
          placeholder: "Selecciona los ámbitos alternativos",
          required: false,
          options: [
            { value: "building", label: "Construcción" },
            { value: "modeling", label: "Modelado" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desarrollo" },
            { value: "configuration", label: "Configuración de Software" },
            { value: "digital-design", label: "Diseño Digital" },
            { value: "video-editing", label: "Edición de Video" },
            { value: "data-packing", label: "Comandos y Data Packs" },
            { value: "server-management", label: "Gestión de Servidores" },
            { value: "music", label: "Música o audio" },
            { value: "other", label: "Otro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un ámbito alternativo."
          }
        },
        {
          id: "experience",
          label: "¿Cuánta experiencia posees en cada puesto al que postulas?",
          type: "textarea",
          placeholder: "Ej. He desarrollado varios plugins para servidores de Minecraft",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona una descripción válida (entre 20 y 500 caracteres)."
          }
        },
        {
          id: "portfolio",
          label: "Enlace a tu portfolio o trabajos previos",
          type: "text",
          placeholder: "Ej. https://susarro.dev",
          required: false,
          validation: {
            pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})([\\/\\w.-]*)*\\/?$",
            errorMessage: "Por favor, proporciona un enlace válido."
          }
        }
      ]
    },
    {
      title: "Otros datos de interés",
      description: "Proporciona cualquier otra información que consideres relevante.",
      fields: [
        {
          id: "availability",
          label: "Media de horas semanales disponibles",
          type: "textarea",
          placeholder: "Ej. 10 horas a la semana",
          required: true,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Por favor, proporciona una disponibilidad válida (entre 10 y 200 caracteres)."
          }
        },
        {
          id: "work-preferences",
          label: "Preferencias concretas durante el trabajo",
          type: "textarea",
          placeholder: "Ej. Prefiero trabajar en equipo con tareas bien definidas",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona una respuesta válida (entre 20 y 500 caracteres)."
          }
        },
        {
          id: "about-you",
          label: "¡Queremos conocerte mejor! Cuéntanos algo sobre ti que creas que nos pueda interesar.",
          type: "textarea",
          placeholder: "Ej. Soy una persona muy comprometida y me encanta aprender cosas nuevas",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona una respuesta válida (entre 20 y 500 caracteres)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar mensaje",
  successMessage: "¡Gracias por postularte! Te responderemos lo antes posible.",
  errorMessage: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
  action: "#", // Simulación de envío para demo
  method: "POST",
  className: "postulate-form"
}
