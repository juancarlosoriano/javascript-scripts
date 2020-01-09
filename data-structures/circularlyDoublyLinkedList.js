class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class CircularlyDoublyLinkedList {
  constructor() {
    this.head = null;
    this.numberOfNodes = 0;
  }

  add(value) {
    let node = new Node(value, null, this.head);

    if (!this.head) {
      this.head = node;
      this.head.prev = node;
      this.head.next = node; // this.head is null when list is empty
    } else {
      node.next = this.head;
      node.prev = this.head.prev;

      this.head.prev.next = node;
      this.head.prev = node;

      this.head = node;
    }

    this.numberOfNodes += 1;
  }

  delete(value) {
    if (!this.head) {
      return false;
    }

    let curr = this.head;
    let isSomethingDeleted = false;
    let count = 0;

    while (curr && curr.value === value) {
      if (curr.next === this.head) {
        // the current node is itself and the head
        curr = null;
        this.head = null;
        this.numberOfNodes -= 1;

        isSomethingDeleted = true;
      } else {
        curr.next.prev = curr.prev;
        curr.prev.next = curr.next;

        this.head = curr.next;
        this.numberOfNodes -= 1;

        curr = curr.next;

        isSomethingDeleted = true;
      }
    }

    while (curr && curr.next && curr.next !== this.head) {
      if (curr.next.value === value) {
        curr.next.next.prev = curr;
        curr.next = curr.next.next;

        isSomethingDeleted = true;
      } else {
        curr = curr.next;
      }

      count++;
      if (count === 29) {
        console.log("Infinite loop");
      }
    }
  }
}

let cdll = new CircularlyDoublyLinkedList();

cdll.add(7);
cdll.add(6);
cdll.add(5);
cdll.add(4);
cdll.add(3);

//console.log(cdll);
cdll.delete(4);
//console.log(cdll);

let node = cdll.head;

console.log(node);
console.log(node.next);
console.log(node.prev);
console.log(node.prev === node.next);
