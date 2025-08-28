// Provide a nonrecursive implementation of Euclid’s algorithm

function gcd(m, n) {
  let remainder;
  for (remainder = m % n; remainder !== 0; remainder = m % n) {
    m = n;
    n = remainder;
  }
  return n;
}

function print() {
  let result = gcd(7, 13);
  console.log(result);
}

print();
