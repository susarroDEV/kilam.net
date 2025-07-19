import type { FormConfig } from "@/types/formsTypes"

export const contactFormConfig_CA : FormConfig  = {
  id: "contact-form",
  name: "contact-form",
  sections: [
    {
      title: "Informació de contacte",
      description: "Si us plau, proporciona'ns un mètode de contacte per poder comunicar-nos amb tu.",
      fields: [
        {
          id: "name",
          label: "Nom per a referir-nos a tu",
          type: "text",
          placeholder: "Ex. Kimani",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Si us plau, introdueix un nom vàlid."
          }
        },
        {
          id: "communication-method",
          label: "Mètode de comunicació",
          type: "select",
          placeholder: "Selecciona un mètode",
          required: true,
          options: [
            { value: "email", label: "Email" },
            { value: "discord", label: "Discord" },
            { value: "twitter", label: "X / Twitter" }
          ],
          validation: {
            errorMessage: "Si us plau, selecciona un mètode de comunicació."
          }
        },
        {
          id: "communication-detail",
          label: "Detalls de contacte",
          type: "text",
          placeholder: "Ex. @LucasOA8",
          required: true,
          validation: {
            maxLength: 100,
            errorMessage: "Si us plau, proporciona un contacte vàlid."
          }
        }
      ]
    },
    {
      title: "Informació del projecte",
      description: "Detalla el projecte o la consulta que desitges realitzar.",
      fields: [
        {
          id: "project-type",
          label: "Tipus de projecte",
          type: "select",
          placeholder: "Selecciona un tipus de projecte",
          required: true,
          options: [
            { value: "event", label: "Esdeveniment" },
            { value: "series", label: "Sèrie" },
            { value: "video", label: "Video" },
            { value: "other", label: "Altres" }
          ],
          validation: {
            errorMessage: "Si us plau, selecciona un tipus de projecte. "
          }
        },
        {
          id: "estimated-players",
          label: "Nombre aproximat de participants",
          type: "number",
          placeholder: "Ej. 10",
          required: false,
          validation: {
            errorMessage: "Si us plau, introdueix un nombre vàlid de jugadors."
          }
        },
        {
          id: "project-description",
          label: "Descripció del projecte",
          type: "textarea",
          placeholder: "Ex. Aquest projecte tracta sobre....",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Si us plau, proporciona una descripció vàlida (entre 20 i 500 caràcters)."
          }
        },
        {
          id: "extra-details",
          label: "Especificacions tècniques addicionals.",
          type: "textarea",
          placeholder: "Ex. Mods, resource pack, etc.",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Si us plau, proporciona detalls addicionals vàlids (màxim 300 caràcters)."
          }
        }
      ]
    },
    {
      title: "Informació addicional",
      description: "Proporciona informació rellevant per a la teva proposta que no hagis especificat anteriorment.",
      fields: [
        {
          id: "budget",
          label: "Pressupost aproximat",
          type: "text",
          placeholder: "Ex. 200€",
          required: false,
          validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Si us plau, introdueix un pressupost vàlid (número fins a dos decimals)."
          }
        },
        {
          id: "project-date",
          label: "Data aproximada",
          type: "text",
          placeholder: "Ej. 30-04-2004",
          required: false,
          validation: {
            pattern: "^\\d{2}-\\d{2}-\\d{4}$",
            errorMessage: "Si us plau, introdueix una data vàlida (DD-MM-AAAA)."
          }
        },
        {
          id: "additional-comments",
          label: "Comentaris addicionals",
          type: "textarea",
          placeholder: "Ex. Aquest projecte té com a objectiu...",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Si us plau, proporciona detalls addicionals vàlids (màxim 300 caràcters)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar proposta",
  successMessage: "Gràcies per contactar amb nosaltres! Et respondrem al més aviat possible.",
  errorMessage: "Ha ocorregut un error en enviar el formulari. Si us plau, intenta-ho de nou.",
  action: "#", // Simulación de envío para demo
  method: "POST",  
  className: "contact-form"
}

export const postulateFormConfig_CA: FormConfig = {
  id: "postulate-form",
  name: "postulate-form",
  sections: [
    {
      title: "Informació personal",
      description: "Explica'ns una mica sobre tu per a conèixer-te millor.",
      fields: [
        {
          id: "name",
          label: "Nom per a referir-nos a tu",
          type: "text",
          placeholder: "Ex. Albert",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Si us plau, introdueix un nom vàlid."
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
            errorMessage: "Si us plau, proporciona un Discord tag vàlid."
          }
        },
        {
          id: "other-socials",
          label: "Altres xarxes",
          type: "text",
          placeholder: "Ex. X: @Meliory2 | Ig: @albert_sanchez_20",
          required: false,
          validation: {
            maxLength: 100,
            errorMessage: "Si us plau, proporciona xarxes socials vàlides."
          }
        },
        {
          id: "age",
          label: "Edat",
          type: "number",
          placeholder: "Ex. 21",
          required: true,
          validation: {
            errorMessage: "Si us plau, introdueix una edat vàlida."
          }
        },
        {
          id: "found-way",
          label: "Com has conegut KILAM?",
          type: "textarea",
          placeholder: "Ex. Veient el meu streamer preferit",
          required: false,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Si us plau, proporciona una resposta vàlida (entre 10 i 200 caràcters)."
          }
        }
      ]
    },
    {
      title: "Aptituds i experiència",
      description: "Explica'ns més sobre les teves habilitats més destacades i la teva experiència prèvia.",
      fields: [
        {
          id: "scope",
          label: "En quin àmbit et postules principalment?",
          type: "select",
          placeholder: "Selecciona un àmbit",
          required: true,
          options: [
            { value: "building", label: "Construcció" },
            { value: "modeling", label: "Modelatge" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desenvolupament" },
            { value: "configuration", label: "Configuració de programari" },
            { value: "digital-design", label: "Disseny digital" },
            { value: "video-editing", label: "Edició de vídeo" },
            { value: "data-packing", label: "Comandaments i data packs" },
            { value: "server-management", label: "Gestió de servidors" },
            { value: "music", label: "Música o àudio" },
            { value: "other", label: "Altres" }
          ],
          validation: {
            errorMessage: "Si us plau, selecciona un àmbit."
          }
        },
        {
          id: "alternative-scope",
          label: "Tens aptituds en altres àmbits?",
          type: "select",
          placeholder: "Selecciona els àmbits alternatius",
          required: false,
          options: [
            { value: "building", label: "Construcció" },
            { value: "modeling", label: "Modelatge" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Desenvolupament" },
            { value: "configuration", label: "Configuració de programari" },
            { value: "digital-design", label: "Disseny digital" },
            { value: "video-editing", label: "Edició de vídeo" },
            { value: "data-packing", label: "Comandaments i data packs" },
            { value: "server-management", label: "Gestió de servidors" },
            { value: "music", label: "Música o àudio" },
            { value: "other", label: "Altres" }
          ],
          validation: {
            errorMessage: "Si us plau, selecciona un àmbit alternatiu."
          }
        },
        {
          id: "experience",
          label: "Quanta experiència posseeixes en cada àmbit al qual postules?",
          type: "textarea",
          placeholder: "Ex. He desenvolupat diversos plugins per a servidors de Minecraft",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Si us plau, proporciona una descripció vàlida (entre 20 i 500 caràcters)."
          }
        },
        {
          id: "portfolio",
          label: "Enllaç al teu portafoli o treballs previs.",
          type: "text",
          placeholder: "Ex. https://susarro.dev",
          required: false,
          validation: {
            pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})([\\/\\w.-]*)*\\/?$",
            errorMessage: "Si us plau, proporciona un enllaç vàlid."
          }
        }
      ]
    },
    {
      title: "Altres dades d'interès",
      description: "Proporciona qualsevol altra informació que consideris rellevant.",
      fields: [
        {
          id: "availability",
          label: "Mitjana d'hores setmanals disponibles",
          type: "textarea",
          placeholder: "Ex. 10 hores a la setmana",
          required: true,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Si us plau, proporciona una disponibilitat vàlida (entre 10 i 200 caràcters()."
          }
        },
        {
          id: "work-preferences",
          label: "Preferències concretes durant el treball",
          type: "textarea",
          placeholder: "Ex. Prefereixo treballar en equip amb tasques ben definides",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Si us plau, proporciona una resposta vàlida (entre 20 i 500 caràcters)."
          }
        },
        {
          id: "about-you",
          label: "Volem conèixer-te millor! Explica'ns alguna cosa sobre tu que creguis que ens pugui interessar.",
          type: "textarea",
          placeholder: "Ex. Sóc una persona molt compromesa i m'encanta aprendre coses noves",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Si us plau, proporciona una resposta vàlida (entre 20 i 500 caràcters)."
          }
        }
      ]
    }
  ],
  submitButtonText: "Enviar missatge",
  successMessage: "Gràcies per postular-te! Et respondrem al més aviat possible.",
  errorMessage: "Ha ocorregut un error en enviar el formulari. Si us plau, intenta-ho de nou.",
  action: "#", // Simulación de envío para demo
  method: "POST",
  className: "postulate-form"
}
