const { Map } = require("immutable");

function getImmutableObject (obj) {
  return Map(obj);
}

export default getImmutableObject;
