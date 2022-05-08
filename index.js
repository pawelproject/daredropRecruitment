// 1. Please write a function that shows the usage of closures

function simpleClosure() {
  let number = 10;

  return function () {
    console.log(++number);
  };
}

const test = simpleClosure();

// test(); // 11
// test(); // 12

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// console.log(sum([5, 1, 2, 3, 4]));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

function flatten(arr) {
  if (!arr.length) {
    return [];
  }
  const a = arr.pop();
  return flatten(arr).concat(Array.isArray(a) ? flatten(a) : [a]);
}

// console.log(flatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function findAllCommonElements(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
}

// console.log(
//   findAllCommonElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
// );

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function findDifferentElements(arr1, arr2) {
  const uniqueArr1 = arr1.filter((el) => !arr2.includes(el));
  const uniqueArr2 = arr2.filter((el) => !arr1.includes(el));

  return [...uniqueArr1, ...uniqueArr2];
}

// console.log(
//   findDifferentElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
// );

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function arraysToTuples(arr1, arr2) {
  const length = Math.min(arr1.length, arr2.length);
  const tuples = [];
  for (let i = 0; i < length; i++) {
    tuples.push([arr1[i], arr2[i]]);
  }
  return tuples;
}

// console.log(arraysToTuples([1, 2, 3], [4, 5, 6, 7]));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// recursive way
function getValueFromPathRecursive(path, object) {
  if (!path.length) {
    return object;
  }
  const newElement = object[path.shift()];
  if (newElement === undefined) {
    return undefined;
  }

  return getValueFromPath(path, newElement);
}

// without recursion
function getValueFromPath(path, object) {
  let currentElement = object;

  while (path.length && currentElement !== undefined) {
    currentElement = currentElement[path.shift()];
  }

  return currentElement;
}

// console.log(
//   getValueFromPathRecursive(["a", "b", "c", "d"], {
//     a: { b: { c: { d: "23" } } },
//   })
// );

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function areObjectEqual(a, b) {
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of allKeys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// console.log(areObjectEqual({ a: "b", c: "d" }, { c: "d", a: "b" }));
// console.log(areObjectEqual({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" }));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function removingSelectedKeys(arr, object) {
  for (const key of arr) {
    delete object[key];
  }
  return object;
}

// console.log(
//   removingSelectedKeys(["color", "size"], {
//     color: "Blue",
//     id: "22",
//     size: "xl",
//   })
// );
