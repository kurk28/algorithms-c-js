// quick-union algorithm

let mockInput = [
  [0, 2],
  [1, 4],
  [2, 5],
  [3, 6],
  [0, 4],
  [6, 0],
  [1, 3],
];

function quickUnion(size, input) {
  const id = new Array(size);
  for (let i = 0; i < id.length; i++) {
    id[i] = i;
  }
  for (let pair of input) {
    let i = pair[0];
    let j = pair[1];
    let idAccessCount = 0;
    for (; i != id[i]; i = id[i]) idAccessCount += 2;
    idAccessCount++;
    for (; j != id[j]; j = id[j]) idAccessCount += 2;
    idAccessCount++;
    if (i === j) {
      console.log(idAccessCount);
      continue;
    }
    id[i] = j;
    idAccessCount++;
    console.log(idAccessCount);
  }
  console.log(id);
}

quickUnion(10, mockInput);
