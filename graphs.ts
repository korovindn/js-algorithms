const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: ["e", "f", "g"],
  e: ["f"],
  f: ["g"],
  g: [],
};

const bfs = (
  graph: { [key: string]: string[] },
  start: string,
  end: string
): boolean => {
  let queue = [start];
  while (queue.length) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    }
    queue = [...queue, ...graph[current]];
  }
  return false;
};

console.log(bfs(graph, "a", "g"));
console.log(bfs(graph, "g", "a"));

const dfs = (
  graph: { [key: string]: string[] },
  curr: string,
  end: string,
  preVisited: string[] = []
): boolean => {
  if (curr === end) return true;
  const visited = [...preVisited, curr];
  if (!graph[curr]) {
    graph[curr] = [];
  }
  for (let i = 0; i < graph[curr].length; i++) {
    if (!visited.includes(graph[curr][i])) {
      if (dfs(graph, graph[curr][i], end, visited)) return true;
    }
  }
  return false;
};

console.log(dfs(graph, "a", "g"));
console.log(dfs(graph, "g", "a"));

const weightedGraph = {
  a: {
    b: 1,
    c: 3,
  },
  b: {
    c: 1,
  },
  c: {
    e: 10,
    f: 15,
    g: 50,
  },
  e: {
    f: 4,
  },
  f: {
    g: 3,
  },
  g: {},
};

const lowestCost = (
  costs: { [key: string]: number },
  processed: string[]
): { cost: number; edge: string } => {
  return Object.keys(costs).reduce(
    (lowest, curr) =>
      !processed.includes(curr) && costs[curr] < lowest.cost
        ? { cost: costs[curr], edge: curr }
        : lowest,
    { cost: Infinity, edge: "" }
  );
};

const dijkstra = (
  graph: { [key: string]: { [key: string]: number } },
  start: string,
  end: string
): number => {
  const costs = Object.keys(graph).reduce(
    (costed, edge) =>
      edge !== start
        ? { ...costed, [edge]: graph[start][edge] || Infinity }
        : costed,
    {}
  );
  const processed = [];
  let { edge } = lowestCost(costs, processed);
  let neighbours = {};
  while (edge) {
    const cost = costs[edge];
    neighbours = graph[edge];
    Object.keys(neighbours).forEach((neighbour) => {
      let newCost = cost + neighbours[neighbour];
      if (newCost < costs[neighbour]) {
        costs[neighbour] = newCost;
      }
    });
    processed.push(edge);
    edge = lowestCost(costs, processed).edge;
  }
  return costs[end]
};

console.log(dijkstra(weightedGraph, "a", "g"));
