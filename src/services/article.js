import {
  ARTICLE_LIST,
  DELETE_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE
} from '@/services/api'
import {
  request,
  METHOD
} from '@/utils/request'

// 获取文章数据
export async function article() {
  return request(ARTICLE_LIST, METHOD.GET)
}
// 删除文章数据
export async function deleteArticle(data) {
  return request(DELETE_ARTICLE, METHOD.POST, data)
}
// 新增文章数据
export async function addArticle(data) {
  return request(ADD_ARTICLE, METHOD.POST, data)
}
// 修改文章数据
export async function updateArticle(data) {
  return request(UPDATE_ARTICLE, METHOD.POST, data)
}