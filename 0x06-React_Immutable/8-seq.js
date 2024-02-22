import { Seq } from 'immutable';

export default function printBestStudents (grades) {
  const res = {};

  Seq(grades).filter((v) => v.score >= 70)
    .forEach((v, k) => {
      res[k] = {
        ...v,
        firstName: `${v.firstName[0].toUpperCase()}${v.firstName.slice(1)}`,
        lastName: `${v.lastName[0].toUpperCase()}${v.lastName.slice(1)}`
      };
    });

  console.log(res);
}
