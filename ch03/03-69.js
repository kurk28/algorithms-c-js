// Show the adjacency matrix for the input pairs 0-2, 1-4, 2-5, 3-6, 0-4, 6-0, and 1-3.

function adjacencyMatrix(size, pairs) {
  let i, j;
  let adj = new Array(size);
  for (i = 0; i < size; i++) {
    adj[i] = new Array(size);
    for (j = 0; j < size; j++) {
      adj[i][j] = 0;
    }
  }
  for (i = 0; i < size; i++) adj[i][i] = 1;
  for (let pair of pairs) {
    adj[pair[0]][pair[1]] = 1;
    adj[pair[1]][pair[0]] = 1;
  }

  return adj;
}

function print() {
  const pairs = [
    [0, 2],
    [1, 4],
    [2, 5],
    [3, 6],
    [0, 4],
    [6, 0],
    [1, 3],
  ];
  const result = adjacencyMatrix(7, pairs);
  console.log(result);
}

print();
