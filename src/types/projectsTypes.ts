export type Project = {
  id: string
  name: string
  texts: ProjectText
  facts: {
    date: string
    players: string
  }
  feedback: ProjectFeedback[] | []
}

type ProjectText = {
  preview: string
  boxes: ProjectTextBox[]
  feedback: string
}

export type ProjectTextBox = {
  title: string
  type: string
  scheme: "normal" | "compact"
  paragraphs: string[]
  media?: MediaBox[]
}

export type MediaBox = {
  type: "image" | "video"
  position?: "up" | "right" | "left" | "down"
  src: string
  alt?: string
  backgroundImage?: string
}

export type ProjectFeedback = {
  type: "text" | "video" | "quote"
  content: "string" | MediaBox
  author?: string
}