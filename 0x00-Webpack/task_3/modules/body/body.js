import "./body.css";
const $ = require("jquery");
const _ = require("lodash");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

let count = 0;

const updateCounter = () => {
  count++;
  $("#count").html(`${count} clicks on the button`);
};
$("button").on("click", _.debounce(updateCounter, 500));
