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
n5.next = n1;

function calculateNumberOfNodes(node) {
  const item = node.item;
  let nextNode = node.next;
  let nodeCount = 1;
  while (nextNode.item !== item) {
    nextNode = nextNode.next;
    nodeCount++;
  }
  console.log(nodeCount);
}

calculateNumberOfNodes(n3);
