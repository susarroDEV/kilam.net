export const getLangName = (lang: string): string => {
  switch (lang) {
    case "es":
      return "Español"
    case "en":
      return "English"
    case "ca":
      return "Català"
    case "eu":
      return "Euskara"
    case "gl":
      return "Galego"
    default:
      return "Unknown"
  }
}