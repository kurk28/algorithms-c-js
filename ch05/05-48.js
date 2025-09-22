// Give the contents of the arrays maxKnown and itemKnown that are computed by program knap(17)

const maxKnown = {};
const itemKnown = {};
const items = [
  { size: 3, value: 4 },
  { size: 4, value: 5 },
  { size: 7, value: 10 },
  { size: 8, value: 11 },
  { size: 9, value: 13 },
];

function knap(m) {
  let i, space, max, maxi, t;
  if (maxKnown[m] != undefined) return maxKnown[m];

  for (i = 0, max = 0; i < items.length; i++) {
    space = m - items[i].size;
    if (space >= 0) {
      t = knap(space) + items[i].value;
      if (t > max) {
        max = t;
        maxi = i;
      }
    }
  }
  maxKnown[m] = max;
  itemKnown[m] = items[maxi];
  return max;
}

function print() {
  const result = knap(17);
  console.log('result:', result);
  console.log('maxKnown:', maxKnown);
  console.log('itemKnown:', itemKnown);
}

print();
