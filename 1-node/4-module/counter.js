let counter = 0;

function increase() {
  counter++;
}

function getCounter() {
  return counter;
}

module.exports.getCounter = getCounter;
module.exports.increase = increase;
// console.log(module); // module이 뭔지 살펴보자
