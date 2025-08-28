// Euclid's algorithm

function gcd(m, n) {
  if (n === 0) return m;
  return gcd(n, m % n);
}

function print() {
  const result = gcd(10, 5);
  console.log(result);
}

print();
