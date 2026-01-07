import { code } from '../constante/StatusCode'

export interface IResponseSuccess<T> {
  message: string
  statusCode: code
  data: T
  meta?: any
}