// This module describes the getImmutableObject function

import { fromJS } from 'immutable';

export default function getImmutableObject (obj) {
  return fromJS(obj);
}
