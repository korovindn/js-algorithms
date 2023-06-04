const toSearchArray = [0, 1, 2, 3, 4, 5, 6, 7];
const linearSearch = <T>(array: T[], item: T): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return i;
  }
  return -1;
};

console.log(linearSearch<number>(toSearchArray, 7)); // 8 iterations

// but our array is sorted, so...

const binarySearchL = <T>(array: T[], item: T): number => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === item) return middle;
    if (array[middle] > item) end = middle - 1;
    else if (array[middle] < item) start = middle + 1;
  }
  return -1;
};

console.log(binarySearchL<number>(toSearchArray, 7)); // 3 iterations

const binarySearchR = <T>(array: T[], item: T): number => {
  let middle = Math.floor(array.length / 2);
  if (array[middle] === item) return middle;
  if (array[middle] > item) return binarySearchR(array.slice(0, middle), item);
  if (array[middle] < item)
    return middle + binarySearchR(array.slice(middle, array.length), item);
};

console.log(binarySearchR<number>(toSearchArray, 7)); // 3 iterations
