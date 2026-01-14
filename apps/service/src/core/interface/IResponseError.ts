import { code } from "../constante/index.js"

export interface IResponseError {
    message: string
    statusCode: code
    typeError: string
    internalError?: string
  }  
