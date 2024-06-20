import { config } from './config'

export const APIAuth = {
  LOGIN: config.APIUrl + '/auth/login',
  REGISTER: config.APIUrl + '/auth/register',
  GET_CUSTOMERS: config.APIUrl + '/auth/customers',
}

export const APIProduct = {
  GET_ALL_PRODUCTS: config.APIUrl + '/product',
  GET_DETAILS_PRODUCT: config.APIUrl + '/product/detail/',
  ADD_PRODUCT: config.APIUrl + '/product/add',
  UPDATE_PRODUCT: config.APIUrl + '/product/update/',
  DELETE_PRODUCT: config.APIUrl + '/product/delete/',
}
