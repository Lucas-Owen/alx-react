const { fromJS } = require("immutable");

function getImmutableObject (obj) {
  return fromJS(obj);
}

export default getImmutableObject;
