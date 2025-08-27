function Node(item) {
  this.item = item;
  this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = null;

function listReversal(node) {
  let t;
  let y = node;
  let r = null;
  while (y !== null) {
    t = y.next;
    y.next = r;
    r = y;
    y = t;
  }
  return r;
}

function printFunction(node) {
  let nextNode = node;
  while (nextNode !== null) {
    console.log(nextNode.item);
    nextNode = nextNode.next;
  }
}

const reversedList = listReversal(n1);
printFunction(reversedList);
