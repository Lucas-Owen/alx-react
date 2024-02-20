const { List, Map } = require("immutable");

export default function concatElements (page1, page2) {
  return List(page1).concat(List(page2));
}

export default function mergeElements (page1, page2) {
  return Map(page1).mergeWith((_, val2) => val2, Map(page2)).toList();
}
