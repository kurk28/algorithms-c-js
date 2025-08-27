function Node(item) {
  this.item = item;
  this.next = null;
}

const n1 = new Node(2);
const n2 = new Node(4);
const n3 = new Node(1);
const n4 = new Node(5);
const n5 = new Node(3);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = null;

function listInsertionSort(node) {
  let t, u, x;
  let b = new Node(null);
  for (t = node; t !== null; t = u) {
    u = t.next;
    for (x = b; x.next !== null; x = x.next) {
      if (x.next.item > t.item) break;
    }
    t.next = x.next;
    x.next = t;
  }
  return b.next;
}

function print() {
  const node = listInsertionSort(n1);
  let nextNode = node;
  while (nextNode !== null) {
    console.log(nextNode.item);
    nextNode = nextNode.next;
  }
}

print();
