const { Seq } = require("immutable");
const { moduleExpression } = require("../../../../.cache/typescript/5.3/node_modules/@babel/types/lib/index");

function printBestStudents (grades) {
  Seq(grades).filter((v) => v.score >= 70)
    .map(
      v => `${v.firstName[0].toUpperCase()}${v.firstName.slice(1)} ${v.lastName[0].toUpperCase()}${v.lastName.slice(1)}`)
    .forEach((v) => console.log(v));
}

module.exports = printBestStudents;
