// weighted quick-union algorithm

let mockInput = [
  [0, 2],
  [1, 4],
  [2, 5],
  [3, 6],
  [0, 4],
  [6, 0],
  [1, 3],
];

function weightedQuickUnion(size, input) {
  const id = new Array(size);
  const sz = new Array(size);
  let i;
  let j;
  for (let i = 0; i < size; i++) {
    id[i] = i;
    sz[i] = 1;
  }
  for (let pair of input) {
    for (i = pair[0]; i != id[i]; i = id[i]);
    for (j = pair[1]; j != id[j]; j = id[j]);
    if (i == j) continue;
    if (sz[i] < sz[j]) {
      id[i] = j;
      sz[j] += sz[i];
    } else {
      id[j] = i;
      sz[i] += sz[j];
    }
  }
  console.log(id);
}

weightedQuickUnion(10, mockInput);
