// Show the adjacency list for the input pairs 0-2, 1-4, 2-5, 3-6, 0-4, 6-0, and 1-3.

function Node(item) {
  this.item = item;
  this.next = null;
}

function addNode(node, item) {
  const newNode = new Node(item);
  newNode.next = node;
  return newNode;
}

function adjacencyList(size, pairs) {
  let i;
  let adj = new Array(size);
  for (i = 0; i < size; i++) adj[i] = null;
  for (const pair of pairs) {
    adj[pair[0]] = addNode(adj[pair[0]], pair[1]);
    adj[pair[1]] = addNode(adj[pair[1]], pair[0]);
  }

  return adj;
}

function print() {
  let i;
  const pairs = [
    [0, 2],
    [1, 4],
    [2, 5],
    [3, 6],
    [0, 4],
    [6, 0],
    [1, 3],
  ];
  const result = adjacencyList(7, pairs);
  for (const [key, value] of result.entries()) {
    console.log('key: ', key);
    for (i = value; i !== null; i = i.next) {
      console.log(i.item);
    }
  }
}

print();
