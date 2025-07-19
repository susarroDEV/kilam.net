import type { FormConfig } from "@/types/formsTypes"

export const contactFormConfig_EU : FormConfig  = {
  id: "contact-form",
  name: "contact-form",
  sections: [
    {
      title: "Kontakturako informazioa",
      description: "Mesedez, eman iezaguzu harremanetan jartzeko bide bat.",
      fields: [
        {
          id: "name",
          label: "Zure izena (erreferentzia gisa)",
          type: "text",
          placeholder: "Adb. Kimani",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Mesedez, idatzi baliozko izen bat."
          }
        },
        {
          id: "communication-method",
          label: "Komunikazio metodoa",
          type: "select",
          placeholder: "Selecciona un método",
          required: true,
          options: [
            { value: "email", label: "Email" },
            { value: "discord", label: "Discord" },
            { value: "twitter", label: "X / Twitter" }
          ],
          validation: {
            errorMessage: "Mesedez, aukeratu komunikazio metodo bat."
          }
        },
        {
          id: "communication-detail",
          label: "Kontakturako xehetasunak",
          type: "text",
          placeholder: "Adb. @LucasOA8",
          required: true,
          validation: {
            maxLength: 100,
            errorMessage: "Mesedez, eman baliozko kontaktu bat."
          }
        }
      ]
    },
    {
      title: "Proiektuaren informazioa",
      description: "Zehaztu buruan duzun proiektua edo kontsulta.",
      fields: [
        {
          id: "project-type",
          label: "Proiektu mota",
          type: "select",
          placeholder: "Hautatu proiektu mota bat",
          required: true,
          options: [
            { value: "event", label: "Ekitaldia" },
            { value: "series", label: "Seriea" },
            { value: "video", label: "Bideoa" },
            { value: "other", label: "Beste" }
          ],
          validation: {
            errorMessage: "Mesedez, hautatu proiektu mota bat."
          }
        },
        {
          id: "estimated-players",
          label: "Parte-hartzaile kopuru estimatua",
          type: "number",
          placeholder: "Adb. 10",
          required: false,
          validation: {
            errorMessage: "Mesedez, idatzi jokalari kopuru baliozko bat."
          }
        },
        {
          id: "project-description",
          label: "Proiektuaren deskribapena",
          type: "textarea",
          placeholder: "Adb. Proiektu honek ingurumena jorratzen du...",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Mesedez, eman 20 eta 500 karaktere arteko deskribapen bat."
          }
        },
        {
          id: "extra-details",
          label: "Zehaztapen tekniko osagarriak",
          type: "textarea",
          placeholder: "Adb. Mods, resource pack, etc.",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Mesedez, gehitu gehienez 300 karaktereko xehetasun osagarri baliozkoak.."
          }
        }
      ]
    },
    {
      title: "Informazio osagarria",
      description: "Zehaztu zure proposamenarentzat garrantzitsua den beste edozein informazio.",
      fields: [
        {
          id: "budget",
          label: "Aurrekontu estimatua",
          type: "text",
          placeholder: "Adb. 200€",
          required: false,
          validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Mesedez, idatzi bi hamartarrerainoko zenbaki bat aurrekontu gisa.."
          }
        },
        {
          id: "project-date",
          label: "Data estimatua",
          type: "text",
          placeholder: "Adb. 30-04-2004",
          required: false,
          validation: {
            pattern: "^\\d{2}-\\d{2}-\\d{4}$",
            errorMessage: "Mesedez, idatzi data baliozko bat (formatua: EE-HH-UUUU)."
          }
        },
        {
          id: "additional-comments",
          label: "Iruzkin gehigarriak",
          type: "textarea",
          placeholder: "Adb. Proiektu honen helburua da...",
          required: false,
          validation: {
            maxLength: 300,
            errorMessage: "Mesedez, gehitu gehienez 300 karaktereko xehetasun osagarri baliozkoak."
          }
        }
      ]
    }
  ],
  submitButtonText: "Proposamena bidali",
  successMessage: "Eskerrik asko gurekin harremanetan jartzeagatik! Ahalik eta lasterren erantzungo dizugu.",
  errorMessage: "Errorea gertatu da formularioa bidaltzean. Saiatu berriro mesedez.",
  action: "#", // Simulación de envío para demo
  method: "POST",  
  className: "contact-form"
}

export const postulateFormConfig_EU: FormConfig = {
  id: "postulate-form",
  name: "postulate-form",
  sections: [
    {
      title: "Informazio pertsonala",
      description: "Kontatu iezaguzu zure inguruan zerbait hobeto ezagutzeko.",
      fields: [
        {
          id: "name",
          label: "Zure izena (erreferentzia gisa)",
          type: "text",
          placeholder: "Adb. Albert",
          required: true,
          validation: {
            maxLength: 50,
            errorMessage: "Mesedez, idatzi baliozko izen bat."
          }
        },
        {
          id: "discord-tag",
          label: "Discord Tag",
          type: "text",
          placeholder: "Adb. meliory2",
          required: true,
          validation: {
            maxLength: 20,
            errorMessage: "Mesedez, eman baliozko Discord tag bat."
          }
        },
        {
          id: "other-socials",
          label: "Beste sare sozial batzuk",
          type: "text",
          placeholder: "Adb. X: @Meliory2 | Ig: @albert_sanchez_20",
          required: false,
          validation: {
            maxLength: 100,
            errorMessage: "Mesedez, eman sare sozial baliodunak."
          }
        },
        {
          id: "age",
          label: "Adina",
          type: "number",
          placeholder: "Adb. 21",
          required: true,
          validation: {
            errorMessage: "Mesedez, adin baliozko bat idatzi."
          }
        },
        {
          id: "found-way",
          label: "Nola ezagutu duzu KILAM?",
          type: "textarea",
          placeholder: "Adb. Nire streamer gogokoena ikusten",
          required: false,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Mesedez, eman 10 eta 200 karaktere arteko erantzun baliozkoa."
          }
        }
      ]
    },
    {
      title: "Gaitasunak eta esperientzia",
      description: "Kontatu iezaguzu zure trebetasun nabarmenen eta aurreko esperientzien inguruan.",
      fields: [
        {
          id: "scope",
          label: "Zein arlotan postulatzen zara batez ere?",
          type: "select",
          placeholder: "Hautatu eremu bat",
          required: true,
          options: [
            { value: "building", label: "Eraikuntza" },
            { value: "modeling", label: "Modelaketa" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Garapena" },
            { value: "configuration", label: "Software konfigurazioa" },
            { value: "digital-design", label: "Diseinu digitala" },
            { value: "video-editing", label: "Bideo edizioa" },
            { value: "data-packing", label: "Komandoak eta data pack-ak" },
            { value: "server-management", label: "Zerbitzari kudeaketa" },
            { value: "music", label: "Musika edo audioa" },
            { value: "other", label: "Beste" }
          ],
          validation: {
            errorMessage: "Mesedez, hautatu arlo bat."
          }
        },
        {
          id: "alternative-scope",
          label: "Beste arlo batzuetan gaitasunik duzu?",
          type: "select",
          placeholder: "Hautatu eremu alternatiboak",
          required: false,
          options: [
            { value: "building", label: "Eraikuntza" },
            { value: "modeling", label: "Modelaketa" },
            { value: "pixel-art", label: "Pixel Art" },
            { value: "development", label: "Garapena" },
            { value: "configuration", label: "Software konfigurazioa" },
            { value: "digital-design", label: "Diseinu digitala" },
            { value: "video-editing", label: "Bideo edizioa" },
            { value: "data-packing", label: "Komandoak eta data pack-ak" },
            { value: "server-management", label: "Zerbitzari kudeaketa" },
            { value: "music", label: "Musika edo audioa" },
            { value: "other", label: "Beste" }
          ],
          validation: {
            errorMessage: "Mesedez, hautatu bigarren arlo bat."
          }
        },
        {
          id: "experience",
          label: "Zein esperientzia duzu postulatzen zaren arlo bakoitzean?",
          type: "textarea",
          placeholder: "Adb. Minecraft zerbitzarientzako hainbat plugin garatu ditut",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Mesedez, eman 20 eta 500 karaktere arteko deskribapen baliozkoa."
          }
        },
        {
          id: "portfolio",
          label: "Zure lanen edo portafolioaren esteka",
          type: "text",
          placeholder: "Adb. https://susarro.dev",
          required: false,
          validation: {
            pattern: "^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})([\\/\\w.-]*)*\\/?$",
            errorMessage: "Mesedez, eman baliozko esteka bat."
          }
        }
      ]
    },
    {
      title: "Intereseko beste datu batzuk",
      description: "Proposamenarekin erlazionatutako beste edozein datu interesgarri eman.",
      fields: [
        {
          id: "availability",
          label: "Astean eskain dezakezun batez besteko ordu kopurua",
          type: "textarea",
          placeholder: "Adb. Astean 10 ordu",
          required: true,
          validation: {
            minLength: 10,
            maxLength: 200,
            errorMessage: "Mesedez, eman 10 eta 200 karaktere arteko erabilgarritasun baliozkoa."
          }
        },
        {
          id: "work-preferences",
          label: "Lanerako baldintza edo lehentasun berezirik",
          type: "textarea",
          placeholder: "Adb. Taldean lan egitea nahiago dut, ondo definitutako atazekin",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Mesedez, eman 20 eta 500 karaktere arteko erantzun baliozkoa."
          }
        },
        {
          id: "about-you",
          label: "Zure buruaz zerbait kontatu, guretzat interesgarria izan daitekeena",
          type: "textarea",
          placeholder: "Adb. Oso pertsona konprometitua naiz eta gauza berriak ikastea asko gustatzen zait",
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            errorMessage: "Mesedez, eman 20 eta 500 karaktere arteko erantzun baliozkoa."
          }
        }
      ]
    }
  ],
  submitButtonText: "Mezua bidali",
  successMessage: "Eskerrik asko zure hautagaitza bidaltzeagatik! Ahalik eta lasterren erantzungo dizugu.",
  errorMessage: "Errorea gertatu da formularioa bidaltzean. Saiatu berriro mesedez.",
  action: "#", // Simulación de envío para demo
  method: "POST",
  className: "postulate-form"
}
