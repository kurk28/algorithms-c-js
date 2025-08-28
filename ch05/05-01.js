// Write a recursive program to compute lg(N!)

function lgn(num) {
  if (num === 0) return 0;
  return Math.log2(num) + lgn(num - 1);
}

function print() {
  const result = lgn(0);
  console.log(result);
}

print();
