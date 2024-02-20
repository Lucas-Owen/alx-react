const { fromJS } = require("immutable");

export function getListObject (array) {
  return fromJS(array)
}
export function addElementToList (list, element) {
  return list.push(element)
}
