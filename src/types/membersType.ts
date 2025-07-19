export type Member = {
  name: string
  role: string
  scopes: string[]
  rrss: RRSSType[]
}

export type RRSSType = {
  name: string
  user: string
  url: string
}
