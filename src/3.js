function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let numbers = [];
for (let i = 0; i < 5; i++) {
  let num = getRandomInt(10);
  while (numbers.includes(num)) {
    num = getRandomInt(10);
  }
  numbers.push(num);
}
return numbers;
