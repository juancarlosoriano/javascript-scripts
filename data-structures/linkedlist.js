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
  // Create a new node using given value and the head as next
  // Set head to the new node
  // Increment number of nodes
  prepend(value) {
    const node = new Node(value, this.head);

    this.head = node;
    this.numberOfNodes++;
  }

  // Add node after the tail of the linked list
  // Create a new node with the given list, next is default to null
  // If head is null
  // New node is now the head
  // If head is not null
  // Store head as current node
  // Traverse the list until the current node's next points to a null
  // Store the new node as current node's next
  // Increment number of nodes
  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }

    this.numberOfNodes++;
  }

  // Find node matching the value given
  // Set head as the current node
  // Traverse the list while current node is not null and the
  // value doesn't equal the search value
  // If current node is equal to null, then return false
  // If current node is not equal to null, then return true
  search(value) {
    let curr = this.head;

    while (curr && curr.value !== value) {
      curr = curr.next;
    }

    return curr !== null;
  }

  // Delete nodes matching the value given from list and return it
  // If the head is null, return false
  // Set current node to the head
  // If current node (head) is not null
  // Keep deleting head node if it matches the value
  // - Change the head to the next node
  // - Set current to the next
  // - Decrement the number of nodes
  // Since the head is guaranteed not a match,
  // We start checking the next node
  // If next node is a match and not null
  // - Set current node's next to be the next's next
  // - Decrement the number of nodes
  // Else, set current node to the next
  delete(value) {
    if (!this.head) {
      return false;
    }

    let curr = this.head;
    let isSomethingDeleted = false;

    while (curr && curr.value === value) {
      this.head = curr.next;
      curr = curr.next;

      this.numberOfNodes -= 1;
      isSomethingDeleted = true;
    }

    while (curr.next) {
      if (curr.next.value === value) {
        curr.next = curr.next.next;

        this.numberOfNodes -= 1;
        isSomethingDeleted = true;
      } else {
        curr = curr.next;
      }
    }

    return isSomethingDeleted;
  }

  // Return a list of nodes in order from head to tail recursively
  // Pass the head in the initial call
  // Check if the current node is null as the base case
  // - Return empty array once the base case is hit
  // For the recursive case, make a recursive call to get an array of
  // values of the rest of the list, appended to the current node's value
  traverse(node) {
    if (!node) {
      return [];
    } else {
      return [node.value, ...this.traverse(node.next)];
    }

    /* Shorter form */
    //return !node ? [] : [node.value, ...this.traverse(node.next)];
  }

  // Return a reversed list of node in order from tail to head recursively
  // Pass the head in the initial call
  // Check if the current node is null as the base case
  // - Return empty array once base case is hit
  // For the recursive case, make a recursive call to get an array of
  // values of the rest of the list in reverse order and append
  // the current node's value
  traverseReversed(node) {
    if (!node) {
      return [];
    } else {
      return [...this.traverseReversed(node.next), node.value];
    }

    /* Shorter form */
    // return !node ? [] : [...this.traverseReversed(node.next), node.value];
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
linkedList.add(56);
console.log(linkedList.traverse(linkedList.head));
console.log(linkedList.delete(56));
console.log(linkedList.traverse(linkedList.head));
