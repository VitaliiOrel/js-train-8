const array = [1, 2, 3, 4, 5];
const a = array.reverse();
console.log(array); // Вивід у консоль: [5, 4, 3, 2, 1]
console.log(a); // Вивід у консоль: [5, 4, 3, 2, 1]

const fn = function (a) {
    return a + 2
}

console.log(fn(5))
console.log(typeof(fn))
console.log(isFunction(fn))

