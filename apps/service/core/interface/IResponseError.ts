import { code } from '../constante/StatusCode'

export interface IResponseError {
    message: string
    statusCode: code
    typeError: string
    internalError?: string
  }  