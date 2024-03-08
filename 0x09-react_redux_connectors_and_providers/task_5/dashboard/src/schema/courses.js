import { normalize, schema } from "normalizr";

export const course = new schema.Entity("courses");

export default function courseNormalizer (data) {
  return normalize(data, [course]);
}
