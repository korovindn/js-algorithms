const tree = [
  {
    v: 5,
    c: [
      {
        v: 1,
        c: [
          {
            v: 1,
            c: [],
          },
          {
            v: 2,
            c: [],
          },
        ],
      },
    ],
  },
  {
    v: 1,
    c: [
      {
        v: 10,
        c: [],
      },
    ],
  },
];

interface TreeSegment {
  v: number;
  c: TreeSegment[];
}

const treeSumR = (tree: TreeSegment[]) => {
  return tree.reduce(
    (sum, curr) =>
      curr.c.length ? sum + curr.v + treeSumR(curr.c) : curr.v + sum,
    0
  );
};

console.log(treeSumR(tree));

const treeSumL = (tree: TreeSegment[]) => {
  let sum = 0;
  let stack = tree.map((el) => el);
  while (stack.length) {
    const el = stack.pop();
    if (el.c.length) {
      stack = [...stack, ...el.c];
    }
    sum += el.v;
  }
  return sum;
};

console.log(treeSumL(tree));
