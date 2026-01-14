export interface IFormattedPagingResponseProps<T> {
    total: number
    skip: number
    take: number
    data: Array<T>
}  

export type IResponse<T> = T

export interface IPaginationResponse<T> {
  data?: Array<T>
  meta?: {
    total: number
    lastPage: number
    currentPage: number
    perPage: number
    prev?: number
    next?: number
  }
}
