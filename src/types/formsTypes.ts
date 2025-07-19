export type FormConfig = {
  id: string
  name: string
  sections: FormSection[]
  submitButtonText?: string
  successMessage?: string
  errorMessage?: string
  action?: string
  method?: 'GET' | 'POST'
  className?: string
}

type FormSection = {
  title: string
  description?: string
  fields: FormField[]
}

type FormField = {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'number'
  placeholder?: string
  required?: boolean
  options?: {
    value: string
    label: string
  }[]
  validation?: {
    pattern?: string
    minLength?: number
    maxLength?: number
    errorMessage?: string
  }
  className?: string
}