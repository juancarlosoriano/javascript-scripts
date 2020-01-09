class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfNodes = 0;
  }

  /* #region Prepend */
  // Create a new node using the given value
  // If new node's next isn't null,
  // Set node as the next's previous
  // Else, set the tail to the new node
  // Set head to the new node
  // Increment the number of nodes
  /* #endregion */
  prepend(value) {
    const node = new Node(value, null, this.head);

    if (node.next) {
      node.next.prev = node;
    } else {
      this.tail = node;
    }

    this.head = node;
    this.numberOfNodes += 1;
  }

  /* #region Append */
  // Create a new node using the given value
  // If new node's previous isn't null,
  // Set new node as the previous' next
  // Else, set the head to the new node
  // Set tail to the new node
  // Increment the number of nodes
  /* #endregion */
  append(value) {
    const node = new Node(value, this.tail, null);

    if (node.prev) {
      node.prev.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.numberOfNodes += 1;
  }

  /* #region Search */
  // Set current node to the head
  // Check if the current node is not null and not the value being searched
  // Terminates when the current node is null (empty list or reach passed the tail)
  // Return true if found else false
  /* #endregion */
  search(value) {
    let curr = this.head;

    while (curr && curr.value !== value) {
      curr = curr.next;
    }

    return curr !== null;
  }

  /* #region Delete */
  // Delete nodes matching the value given from list and return it
  // Check if the head is null, return false if true
  // Set current node to the head
  // Set current node's previous to null
  // If current node (head) is not null,
  // Keep deleting the current node (head) if it matches the value
  // - Change the head to the next node
  // - Change the new next node's previous to current node
  // - Set current to the next
  // - If head node is the tail, set tail node to
  // - If head node is null, set tail node to null (this means the tail was deleted)
  // - Decrement the number of nodes
  /* #endregion */
  delete(value) {
    if (!this.head) {
      return false;
    }

    let curr = this.head;
    let isSomethingDeleted = false;

    while (curr && curr.value === value) {
      if (curr === this.tail) {
        this.head = null;
        this.tail = null;
        curr = null;
      } else {
        this.head = curr.next;
        this.head.prev = null;
        curr = curr.next;
      }

      this.numberOfNodes -= 1;
      isSomethingDeleted = true;
    }

    while (curr && curr.next) {
      if (curr.next.value === value) {
        if (curr.next === this.tail) {
          curr.next = null;
          this.tail = curr;
        } else {
          curr.next = curr.next.next;
          curr.next.prev = curr;
        }

        this.numberOfNodes -= 1;
        isSomethingDeleted = true;
      } else {
        curr = curr.next;
      }
    }

    return isSomethingDeleted;
  }

  // Pass the head node to traverse
  // As the base case, if the passed node is null, return an empty array
  // For the recursive case, return an array that contains current node's value
  // and the traverse return of the next node
  traverse(node) {
    if (!node) {
      return [];
    } else {
      return [node.value, ...this.traverse(node.next)];
    }

    /* Shorter version */
    //return !node ? [] : [node.value, ...this.traverse(node.next)];
  }

  traverseReversed(node) {
    /* First Method - Pass the head */
    if (!node) {
      return [];
    } else {
      return [...this.traverseReversed(node.next), node.value];
    }

    /* Shorter version */
    //return !node ? [] : [...this.traverseReversed(node.next), node.value];

    /* Second Method - Pass the tail */
    /* if (!node) {
      return [];
    } else {
      return [node.value, ...this.traverseReversed(node.prev)];
    }
    */

    /* Shorter version */
    //return !node ? [] : [node.value, ...this.traverseReversed(node.prev)];
  }
}

const dll = new DoublyLinkedList();
/*
dll.prepend(1);
dll.prepend(2);

console.log(dll);
console.log(dll.head);
console.log(dll.head.next);
*/

dll.append(3);
dll.append(4);
dll.append(5);
console.log(dll.traverse(dll.head));
dll.delete(4);
console.log(dll.traverse(dll.head));
console.log(dll);
console.log(dll.head);
console.log(dll.tail);
