import { code } from "../constante/index.js"
export interface IResponseSuccess<T> {
  message: string
  statusCode: code
  data: T
  meta?: any
}
