export type ApiResponse<T> = {
  Metadatas: {
    description: string
    type: 'info' | 'warning' | 'error' | 'success'
    data: string
  }[] | null
  exceptions: ApiErrorResponse[] | null
  isSuccessful: boolean
  statusCode: number
  message: T
}
export type ApiErrorResponse = {
  message: string
  source: string
  typeData: {
    name: string
    nameSpace: string
  }
}
