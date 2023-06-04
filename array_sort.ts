const toSortArray = [0, 28, 200, 10, -2, 100];

const bubbleSort = <T>(
  array: T[],
  sorter: (a: T, b: T) => 1 | -1 = (a, b) => (a < b ? -1 : 1)
): T[] => {
  const res = array;
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length - 1 - i; j++) {
      if (sorter(res[j], res[j + 1]) === 1) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }
  return res;
};

console.log(bubbleSort<number>(toSortArray)); // works good, but min O(n) max O(n^2)

const quickSort = <T>(
  array: T[],
  sorter: (a: T, b: T) => 1 | -1 = (a, b) => (a < b ? -1 : 1)
): T[] => {
  if (array.length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const less = [];
  const greater = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (sorter(array[i], pivot) === 1) greater.push(array[i])
    else less.push(array[i])
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
};

console.log(quickSort<number>(toSortArray))
