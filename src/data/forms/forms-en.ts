import type { FormConfig } from "@/types/formsTypes"

export const contactFormConfig_EN : FormConfig  = {
  id: "contact-form",
  name: "contact-form",
  sections: [
    {
      title: "Contact information",
      description: "Please, provide a contact method to reach out to you.",
      fields: [
        {
          id: "name",
          label: "Name",
          type: "text",
          placeholder: "e.g. Kimani",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Please, provide a valid name."
          }
        },
        {
          id: "communication-method",
          label: "Communication method",
          type: "select",
          placeholder: "Select a communication method",
          required: true,
          options: [
            { value: "email", label: "Email" },
            { value: "discord", label: "Discord" },
            { value: "twitter", label: "X / Twitter" }
          ],
          validation: {
            errorMessage: "Please, select a communication method."
          }
        },
        {
          id: "communication-detail",
          label: "Contact details",
          type: "text",
          placeholder: "e.g. @LucasOA8",
          required: true,
          validation: {
            maxLength: 100,
            errorMessage: "Please, provide valid contact details."
          }
        }
      ]
    },
    {
      title: "Project information",
      description: "Describe the details of the project or the questions you wish to consult.",
      fields: [
        {
          id: "project-type",
          label: "Project type",
          type: "select",
          placeholder: "Select a project type",
          required: true,
          options: [
            { value: "event", label: "Event" },
            { value: "series", label: "Series" },
            { value: "video", label: "Video" },
            { value: "other", label: "Other" }
          ],
          validation: {
            errorMessage: "Please, select a project type."
          }
        },
        {
          id: "estimated-players",
          label: "Estimated amount of participants",
          type: "number",
          placeholder: "e.g. 10",
          required: false,
          validation: {
            errorMessage: "Please, provide a valid amount of participants."
          }
        },
        {
          id: "project-description",
          label: "Project description",
          type: "textarea",
          placeholder: "e.g. This project consist of...",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Please, provide a valid description (between 20 and 500 characters)."
          }
        },
        {
          id: "extra-details",
          label: "Additional technical specifications",
          type: "textarea",
          placeholder: "e.g. Mods, resource pack, etc.",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Please, provide valid additional details (maximum 300 characters)."
          }
        }
      ]
    },
    {
      title: "Additional information",
      description: "Provide relevant information to your proposal that has not been mentioned already.",
      fields: [
        {
          id: "budget",
          label: "Approximate budget",
          type: "text",
          placeholder: "e.g. 200€",
          required: false,
          validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Please, provde a valid budget (number with up to two decimal digits)."
          }
        },
        {
          id: "project-date",
          label: "Approximate date",
          type: "text",
          placeholder: "e.g. 30-04-2004",
          required: false,
          validation: {
            pattern: "^\\d{2}-\\d{2}-\\d{4}$",
            errorMessage: "Please, provide a valid date (format: YYYY-MM-DD)."
          }
        },
        {
          id: "additional-comments",
          label: "Additional comments",
          type: "textarea",
          placeholder: "e.g. This project has as goal...",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Please, provide valid additional comments (maximum 300 characters)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Send a proposal",
  successMessage: "Thank you for contacting us! We will reach out to you as soon as possible.",
  errorMessage: "An error occurred while sending the form. Please, try again.",
  action: "#", // Simulación de envío para demo
  method: "POST",  
  className: "contact-form"
}

export const postulateFormConfig_EN: FormConfig = {
  id: "postulate-form",
  name: "postulate-form",
  sections: [
    {
      title: "Personal information",
      description: "Tell us a bit about yourself, to get to know you.",
      fields: [
        {
          id: "name",
          label: "Name",
          type: "text",
          placeholder: "e.g. Albert",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Please, provide a valid name."
          }
        },
        {
          id: "discord-tag",
          label: "Discord Tag",
          type: "text",
          placeholder: "e.g. meliory2",
          required: true,
          validation: {
            maxLength: 20,
            errorMessage: "Please, provide a valid Discord tag."
          }
        },
        {
          id: "other-socials",
          label: "Other social media",
          type: "text",
          placeholder: "e.g. X: @Meliory2 | Ig: @albert_sanchez_20",
          required: false,
          validation: {
            maxLength: 100,
            errorMessage: "Please, provide valid social media."
          }
        },
        {
          id: "age",
          label: "Age",
          type: "number",
          placeholder: "e.g. 21",
          required: true,
          validation: {
            errorMessage: "Please, provide a valid age."
          }
        },
        {
          id: "found-way",
          label: "How did you find KILAM?",
          type: "textarea",
          placeholder: "e.g. Viendo a mi streamer favorito",
          required: false,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Please, provide a valid answer (between 10 and 200 characters)."
          }
        }
      ]
    },
    {
      title: "Skills and experience",
      description: "Tell us more about your main skills and your previous experience.",
      fields: [
        {
          id: "scope",
          label: "What is the main field you would like to apply for?",
          type: "select",
          placeholder: "Select your main field",
          required: true,
          options: [
            { value: "building", label: "Building" },
            { value: "modeling", label: "Modelling" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Developing" },
            { value: "configuration", label: "Software configuration" },
            { value: "digital-design", label: "Digital design" },
            { value: "video-editing", label: "Video editing" },
            { value: "data-packing", label: "Commands and Data Packs" },
            { value: "server-management", label: "Server management" },
            { value: "music", label: "Music or audio" },
            { value: "other", label: "Other" }
          ],
          validation: {
            errorMessage: "Please, select a field."
          }
        },
        {
          id: "alternative-scope",
          label: "Do you have any skills in other fields?",
          type: "select",
          placeholder: "Select alternative fields",
          required: false,
          options: [
            { value: "building", label: "Building" },
            { value: "modeling", label: "Modelling" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Developing" },
            { value: "configuration", label: "Software configuration" },
            { value: "digital-design", label: "Digital design" },
            { value: "video-editing", label: "Video editing" },
            { value: "data-packing", label: "Commands and Data Packs" },
            { value: "server-management", label: "Server management" },
            { value: "music", label: "Music or audio" },
            { value: "other", label: "Other" }
          ],
          validation: {
            errorMessage: "Please, select an alternative field."
          }
        },
        {
          id: "experience",
          label: "How much experience do you have in each field you apply for?",
          type: "textarea",
          placeholder: "e.g. I have developed several plugins for Minecraft servers...",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Please, provide a valid description (between 20 and 500 characters)."
          }
        },
        {
          id: "portfolio",
          label: "Link to your portfolio or previous work.",
          type: "text",
          placeholder: "e.g. https://susarro.dev",
          required: false,
          validation: {
            pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})([\\/\\w.-]*)*\\/?$",
            errorMessage: "Please, provide a valid URL."
          }
        }
      ]
    },
    {
      title: "Other interestign facts",
      description: "Provide any other information that you find relevant.",
      fields: [
        {
          id: "availability",
          label: "Average weekly hours available",
          type: "textarea",
          placeholder: "e.g. 10 hours per week",
          required: true,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Please, provide a valid answer (between 10 and 200 characters)."
          }
        },
        {
          id: "work-preferences",
          label: "Specific preferences during the work",
          type: "textarea",
          placeholder: "e.g. I prefer to work teaming up with other people and well defined tasks.",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Please, provide a valid answer (between 20 and 500 characters)."
          }
        },
        {
          id: "about-you",
          label: "We want to get to know you better! Tell us something about you, that we may be interested in.",
          type: "textarea",
          placeholder: "e.g. I am a very committed person and I love learning new things.",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Please, provide a valid answer (between 20 and 500 characters)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Send message",
  successMessage: "Thank you for applying! We will reach out to you as soon as possible.",
  errorMessage: "An error occurred while sending the form. Please, try again.",
  action: "#", // Simulación de envío para demo
  method: "POST",
  className: "postulate-form"
}
