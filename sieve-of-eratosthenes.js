function sieveOfEratosthenes() {
  const arr = new Array(100).fill(1);
  let i, j;
  for (i = 2; i < arr.length; i++) {
    if (arr[i]) {
      for (j = i; j * i < arr.length; j++) arr[j * i] = 0;
    }
  }
  for (i = 2; i < arr.length; i++) {
    if (arr[i]) console.log(i);
  }
}

sieveOfEratosthenes();
