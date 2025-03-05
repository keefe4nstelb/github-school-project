function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomizeArrayElements(arr) {
  const newArr = arr.slice();
  for (let i = 0; i < newArr.length - 1; i++) {
    const j = getRandomInt(newArr.length - i);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const arr = ["apple", "banana", "orange", "mango", "pineapple"];
console.log(randomizeArrayElements(arr));
