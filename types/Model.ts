import { Base } from "@zhead/schema"

export type BaseModel = {
  id: number
  range: number[]
}

export type Model = BaseModel & {
  measure: string
  diameter: number
  model: string
  soft: string
}

export type DiyModel = BaseModel & {
  size: number
}

export type Header = {
  name: string
  key: string
}