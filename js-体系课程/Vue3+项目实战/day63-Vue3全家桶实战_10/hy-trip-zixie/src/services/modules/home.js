import hyRequest from '../request'

export function getHomeHotSuggests() {
  return hyRequest.get({ 
    url: "/home/hotSuggests" 
  })
}
export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}