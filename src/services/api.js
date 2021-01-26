// 跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL

module.exports = {
  LOGIN: `${BASE_URL}/login/login`,
  // 分类管理
  CATEGORY: `${BASE_URL}/api/categoryList`,
  DELETE_CATEGORY: `${BASE_URL}/admin/deleteCategory`,
  ADD_CATEGORY: `${BASE_URL}/admin/addCategory`,
  UPDATE_CATEGORY: `${BASE_URL}/admin/updateCategory`,
  // 标签管理
  TAG_LIST: `${BASE_URL}/api/tagList`,
  DELETE_TAG: `${BASE_URL}/admin/deleteTag`,
  ADD_TAG: `${BASE_URL}/admin/addTag`,
  UPDATE_TAG: `${BASE_URL}/admin/updateTag`,
  // 评论管理
  COMMENT: `${BASE_URL}/api/getComment`,
  DELETE_COMMENT: `${BASE_URL}/admin/deleteComment`,
  //
  ROUTES: `${BASE_URL}/routes`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`
}
