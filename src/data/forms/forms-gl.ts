import type { FormConfig } from "@/types/formsTypes"

export const contactFormConfig_GL : FormConfig  = {
  id: "contact-form",
  name: "contact-form",
  sections: [
    {
      title: "Información de contacto",
      description: "Por favor, proporciónanos un método de contacto para poder comunicarnos contigo.",
      fields: [
        {
          id: "name",
          label: "Nome para referirnos a ti",
          type: "text",
          placeholder: "Ex. Kimani",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Por favor, introduce un nome válido."
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
          placeholder: "Ex. @LucasOA8",
          required: true,
          validation: {
            maxLength: 100,
            errorMessage: "Por favor, proporciona un contacto válido."
          }
        }
      ]
    },
    {
      title: "Información do proxecto",
      description: "Detalla o proxecto ou a consulta que desexas realizar.",
      fields: [
        {
          id: "project-type",
          label: "Tipo de proxecto",
          type: "select",
          placeholder: "Selecciona un tipo de proxecto",
          required: true,
          options: [
            { value: "event", label: "Evento" },
            { value: "series", label: "Serie" },
            { value: "video", label: "Video" },
            { value: "other", label: "Outro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un tipo de proxecto."
          }
        },
        {
          id: "estimated-players",
          label: "Número estimado de participantes",
          type: "number",
          placeholder: "Ex. 10",
          required: false,
          validation: {
            errorMessage: "Por favor, introduce un número válido de xogadores."
          }
        },
        {
          id: "project-description",
          label: "Descrición do proxecto",
          type: "textarea",
          placeholder: "Ex. Este proxecto trata sobre...",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona unha descrición válida (entre 20 e 5000 caracteres)."
          }
        },
        {
          id: "extra-details",
          label: "Especificacións técnicas adicionais",
          type: "textarea",
          placeholder: "Ex. Mods, resource pack, etc.",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Por favor, proporciona detalles adicionais válidos (máximo 300 caracteres). "
          }
        }
      ]
    },
    {
      title: "Información adicional",
      description: "Proporciona información relevante para a túa proposta que non especificaras anteriormente.",
      fields: [
        {
          id: "budget",
          label: "Presuposto aproximado",
          type: "text",
          placeholder: "Ex. 200€",
          required: false,
          validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Por favor, introduce un presuposto válido (número con ata dous decimais)."
          }
        },
        {
          id: "project-date",
          label: "Data aproximada",
          type: "text",
          placeholder: "Ex. 30-04-2004",
          required: false,
          validation: {
            pattern: "^\\d{2}-\\d{2}-\\d{4}$",
            errorMessage: "Por favor, introduce unha data válida (formato YYYY-MM-DD). "
          }
        },
        {
          id: "additional-comments",
          label: "Comentarios adicionais",
          type: "textarea",
          placeholder: "Ex. Este proxecto ten como obxetivo...",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Por favor, proporciona detalles adicionais válidos (máximo 300 caracteres)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar proposta",
  successMessage: "Grazas por contactarnos! Responderémosche o antes posible.",
  errorMessage: "Houbo un erro ao enviar o formulario. Por favor, téntao de novo.",
  action: "#", // Simulación de envío para demo
  method: "POST",  
  className: "contact-form"
}

export const postulateFormConfig_GL: FormConfig = {
  id: "postulate-form",
  name: "postulate-form",
  sections: [
    {
      title: "Información persoal",
      description: "Cóntanos un pouco sobre ti para coñecerte mellor.",
      fields: [
        {
          id: "name",
          label: "Nome para referirnos a ti",
          type: "text",
          placeholder: "Ex. Albert",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Por favor, introduce un nome válido."
          }
        },
        {
          id: "discord-tag",
          label: "Discord Tag",
          type: "text",
          placeholder: "Ex. meliory2",
          required: true,
          validation: {
            maxLength: 20,
            errorMessage: "Por favor, proporciona un Discord Tag válido."
          }
        },
        {
          id: "other-socials",
          label: "Outras redes",
          type: "text",
          placeholder: "Ex. X: @Meliory2 | Ig: @albert_sanchez_20",
          required: false,
          validation: {
            maxLength: 100,
            errorMessage: "Por favor, proporciona redes sociales válidas."
          }
        },
        {
          id: "age",
          label: "Idade",
          type: "number",
          placeholder: "Ex. 21",
          required: true,
          validation: {
            errorMessage: "Por favor, introduce unha idade válida."
          }
        },
        {
          id: "found-way",
          label: "Como coñeciches KILAM?",
          type: "textarea",
          placeholder: "Ex. Vendo ao meu streamer favorito",
          required: false,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Por favor, proporciona unha respuesta válida (entre 10 e 200 caracteres)."
          }
        }
      ]
    },
    {
      title: "Aptitudes e experiencia",
      description: "Cóntanos máis acerca das túas habilidades máis destacadas e a túa experiencia previa.",
      fields: [
        {
          id: "scope",
          label: "A que ámbito postulas principalmente?",
          type: "select",
          placeholder: "Selecciona un ámbito",
          required: true,
          options: [
            { value: "building", label: "Construción" },
            { value: "modeling", label: "Modelado" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desenvolvemento" },
            { value: "configuration", label: "Configuración de Software" },
            { value: "digital-design", label: "Diseño Dixital" },
            { value: "video-editing", label: "Edición de Video" },
            { value: "data-packing", label: "Comandos e Data Packs" },
            { value: "server-management", label: "Xestión de Servidores" },
            { value: "music", label: "Música ou audio" },
            { value: "other", label: "Outro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un ámbito."
          }
        },
        {
          id: "alternative-scope",
          label: "Tes aptitudes noutros ámbitos? ",
          type: "select",
          placeholder: "Selecciona os ámbitos alternativos",
          required: false,
          options: [
            { value: "building", label: "Construción" },
            { value: "modeling", label: "Modelado" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desenvolvemento" },
            { value: "configuration", label: "Configuración de Software" },
            { value: "digital-design", label: "Diseño Dixital" },
            { value: "video-editing", label: "Edición de Video" },
            { value: "data-packing", label: "Comandos e Data Packs" },
            { value: "server-management", label: "Xestión de Servidores" },
            { value: "music", label: "Música ou audio" },
            { value: "other", label: "Outro" }
          ],
          validation: {
            errorMessage: "Por favor, selecciona un ámbito alternativo."
          }
        },
        {
          id: "experience",
          label: "Canta experiencia posúes en cada ámbito ao que postulas?",
          type: "textarea",
          placeholder: "Ex. Desenvolvín varios plugins para servidores de Minecraft",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona unha descripción válida (entre 20 e 500 caracteres)."
          }
        },
        {
          id: "portfolio",
          label: "Enlace ao teu portafolios ou traballos previos.",
          type: "text",
          placeholder: "Ex. https://susarro.dev",
          required: false,
          validation: {
            pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})([\\/\\w.-]*)*\\/?$",
            errorMessage: "Por favor, proporciona un enlace válido."
          }
        }
      ]
    },
    {
      title: "Outros datos de interese",
      description: "Proporciona calquer outra información que consideres relevante.",
      fields: [
        {
          id: "availability",
          label: "Media de horas semanais dispoñibles",
          type: "textarea",
          placeholder: "Ex. 10 horas á semana",
          required: true,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Por favor, proporciona unha disponibilidad válida (entre 10 e 200 caracteres)."
          }
        },
        {
          id: "work-preferences",
          label: "Preferencias concretas durante o traballo",
          type: "textarea",
          placeholder: "Ex. Prefiro traballar en equipo con tarefas ben definidas",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona unha resposta válida (entre 20 e 500 caracteres)."
          }
        },
        {
          id: "about-you",
          label: "Queremos coñecerte mellor! Cóntanos algo sobre ti que creas que nos poida interesar.",
          type: "textarea",
          placeholder: "Ex. Son unha persoa moi comprometida e encántame aprender cousas novas",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Por favor, proporciona unha resposta válida (entre 20 e 500 caracteres)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar mensaxe",
  successMessage: "Grazas por postularte! Responderémosche o antes posible.",
  errorMessage: "Houbo un erro ao enviar o formulario. Por favor, téntao de novo.",
  action: "#", // Simulación de envío para demo
  method: "POST",
  className: "postulate-form"
}
