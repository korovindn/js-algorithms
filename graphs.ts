const graph = {
  a: ["c"],
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
    queue = [...queue, ...graph[current]]
  }
  return false
};

console.log(bfs(graph, 'a', 'g'))
console.log(bfs(graph, 'g', 'a'))

const dfs = (
  graph: { [key: string]: string[] },
  curr: string,
  end: string,
  preVisited: string[] = []
): boolean => {
  if(curr === end) return true
	const visited = [...preVisited, curr]
  if(!graph[curr]) {
    graph[curr] = []
  }
  for(let i = 0; i < graph[curr].length; i++){
    if(!visited.includes(graph[curr][i])) {
      if (dfs(graph, graph[curr][i], end, visited)) return true
    }
  }
  return false
}

console.log(dfs(graph, 'a', 'g'))
console.log(dfs(graph, 'g', 'a'))