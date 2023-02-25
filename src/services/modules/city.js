import dyRequest from '../request'
export function getCityAll() {
  return dyRequest.get({
    url: '/city/all'
  })
}