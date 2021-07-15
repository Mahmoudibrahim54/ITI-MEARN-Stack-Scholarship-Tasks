var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(
  fruits.every((element) => {
    return typeof element === "string";
  })
);

console.log(
  fruits.some((element) => {
    return element[0] === "a";
  })
);

console.log(
  fruits.filter((element) => {
    if (element[0] === "b" || element[0] === "s") {
      return true;
    }
  })
);

var newFruit = fruits.map((element) => {
  return "I Love " + element;
});

console.log(
  newFruit.forEach((element) => {
    console.log(element);
  })
);
console.log(
  [0, 1, 2, 3, 4].reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  })
);
