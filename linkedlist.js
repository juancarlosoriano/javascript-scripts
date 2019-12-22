class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.numberOfNodes = 0;
  }

  // Make new node the head/Add a new node to the head
  prepend(value) {
    // Create a new node using given value and the head as next
    const node = new Node(value, this.head);

    // Set head to the new node
    this.head = node;

    // Increment number of nodes
    this.numberOfNodes++;
  }

  // Add node after the tail of the linked list
  add(value) {
    // Create a new node with the given list, next is default to null
    const node = new Node(value);

    // If head is null
    if (this.head === null) {
      this.head = node; // - New node is now the head
    } else {
      // If head is not null,
      let curr = this.head; // Store head as current node

      //Traverse the list until the current node points to a null
      while (curr.next !== null) {
        curr = curr.next;
      }

      // Store the new node as current node's next
      curr.next = node;
    }

    // Increment number of nodes
    this.numberOfNodes++;
  }

  // Find node matching the value given
  search(value) {
    // Set head as the current node
    let curr = this.head;

    // Traverse the list while current node is not null and the
    // value doesn't equal the search value
    while (curr !== null && curr.value !== value) {
      curr = curr.next;
    }

    // If current node is equal to null, then return false
    // If current node is not equal to null, then return true
    return curr !== null;
  }

  // Delete nodes matching the value given from list and return it
  delete(value) {
    // If the head is null, return null
    if (this.head === null) {
      return null;
    }
    // Set to-be-deleted node to null
    let deletedNode = null;

    // Check if head needs to be deleted
    if (this.head.value === value) {
      // If head need to be deleted, store head in the to-be-deleted node
      deletedNode = this.head;

      // Set head to its next node
      this.head = this.head.next;
    }
    // Set current node to the head
    let current = this.head;

    // While current.next is not null; it keeps going until all matching
    // values are deleted
    while (current.next !== null) {
      // If the next node is a match
      if (current.next.value === value) {
        // Set current.next in the to-be-deleted node
        deletedNode = current.next;

        // Set current node's next to the next's next
        current.next = current.next.next;

        // Decrement the node count
        this.numberOfNodes--;
      } else {
        // Set current to current.next
        current = current.next;
      }
    }

    return deletedNode !== null;
  }

  // Return a list of nodes in order from head to tail recursively
  // Pass the head in the initial call
  traverse(node) {
    // Check if the current node is null as the base case
    if (node === null) {
      // Return empty array once the base case is hit
      return [];
    } else {
      // For the recursive case, make a recursive call to get an array of
      // values of the rest of the list, appended to the current node's value
      return [node.value, ...this.traverse(node.next)];
    }

    /* Shorter form
    return node === null ? [] : [node.value, ...this.traverse(node.next)];
    */
  }

  // Return a reversed list of node in order from tail to head recursively
  // Pass the head in the initial call
  traverseReversed(node) {
    // Check if the current node is null as the base case
    if (node === null) {
      // Return empty array once base case is hit
      return [];
    } else {
      // For the recursive case, make a recursive call to get an array of
      // values of the rest of the list in reverse order and append
      // the current node's value
      return [...this.traverseReversed(node.next), node.value];
    }

    /* Shorter form
    return node === null ? [] : [...this.traverseReversed(node.next), node.value];
    */
  }
}

const linkedList = new LinkedList();
// linkedList.prepend(10);
// linkedList.prepend(3);
// linkedList.prepend(7);
linkedList.add(10);
linkedList.add(3);
linkedList.add(7);
linkedList.add(8);
linkedList.add(100);
linkedList.add(56);
// linkedList.add(3);
// linkedList.add(2);
// console.log(linkedList.head.value);
// console.log(linkedList.head.next.value);
// console.log(linkedList.head.next.next.value);
// console.log(linkedList.head.next.next);
// console.log(linkedList.search(3));
// console.log(linkedList.search(10));
// console.log(linkedList.search(2));
// console.log("Deleting...");
// console.log(linkedList.delete(2));
// console.log(linkedList.head.value);
// console.log(linkedList.head.next.value);
// console.log(linkedList.head.next.next);
console.log(linkedList.traverse(linkedList.head));
console.log(linkedList.traverseReversed(linkedList.head));
