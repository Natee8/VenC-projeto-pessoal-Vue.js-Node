import { IFormattedPagingResponseProps, IPaginationResponse } from '../core/interface/IPaginationResponse.ts'

export interface IPaginateArrayProps<T> {
  array: Array<T>
  itemsPerPage: number
}

export const paginateArray = <T>({
  array,
  itemsPerPage
}: IPaginateArrayProps<T>): T[][] => {
  const pages: T[][] = []

  for (let i = 0; i < array.length; i++) {
    const pageIndex = Math.floor(i / itemsPerPage)

    if (!pages[pageIndex]) {
      pages[pageIndex] = []
    }

    pages[pageIndex].push(array[i])
  }

  return pages
}


export const pagingResponse = <T>({
  total,
  take,
  skip,
  data
}: IFormattedPagingResponseProps<T>): IPaginationResponse<T> => {
  const totalPages = Math.ceil(total / take)
  const currentPage = Math.floor(skip / take) + 1
  const hasNextPage = currentPage < totalPages

  return {
    data,
    meta: {
      total,
      lastPage: totalPages,
      currentPage,
      perPage: take,
      prev: currentPage > 1 ? currentPage - 1 : undefined,
      next: hasNextPage ? currentPage + 1 : undefined
    }
  }
}
