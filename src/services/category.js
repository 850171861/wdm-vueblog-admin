import {
  CATEGORY,
  DELETE_CATEGORY
} from '@/services/api'
import {
  request,
  METHOD
} from '@/utils/request'

export async function category() {
  return request(CATEGORY, METHOD.GET)
}

export async function deleteCategory(data) {
  return request(DELETE_CATEGORY, METHOD.POST, data)
}