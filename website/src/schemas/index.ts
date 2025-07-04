import author from './author'
import book from './book'
import blockContent from './blockContent'
import category from './category'
import narrator from './narrator'
import review from './review'

export const schemaTypes = [
  // ドキュメントタイプ
  author,
  book,
  category,
  narrator,
  review,
  // オブジェクトタイプ
  blockContent,
]

export {
  author,
  book,
  blockContent,
  category,
  narrator,
  review,
}