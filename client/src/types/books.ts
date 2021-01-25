export type BookProps =  {
  _id: number,
  title: string,
  isbn?: number,
  pageCount: number,
  thumbnailUrl: string,
  shortDescription?: string,
  longDescription?: string,
  status?: string,
  authors?: string,
  categories?: Array<string>
}
