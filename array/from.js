// Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.


const arr = Array.from({ length: 200 }, (_el, index) => ({
  value: Math.random(),
  label: `row ${index}`
}))

console.log(arr.length) // 200

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]
