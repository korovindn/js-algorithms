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

console.log(bubbleSort<number>(toSortArray)) // works good, but min O(n) max O(n^2)

