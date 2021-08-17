// Linked List (article from FCC)

// Linked list is a linear data structure similar to an array.
// Unlike arrays, elemets are not stored in a particular memory location / index.
// Rather, each element is a separate object that contains a pointer (link) to
// the next object in that list.

// Each element (node) contains two items; the data (value) stored & a link to next node
// Data can be any valid data type.

// The entry point/node to a linked list is called the "head". The head is a reference
// to the first node in the linked list. The last node on the list points to "null".
// If a list is empty, the head is a null reference.

// In JS a linked list looks like:

// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null,
//         },
//       },
//     },
//   },
// };

// ARRAYS VS LINKED LISTS

// PROS of Arrays:
// -Constant O(1) for search operations

// CONS of Arrays:
// -Insert/delete time is O(n) because you have to shift everything to the left or the right

// PROS of Linked Lists:
// -Nodes can easily be removed or added from a linked list without reorganizing
//      the data structure. Time complexity O(1) constant time since references just
//      needs to be reassigned.
//      * Note that new node should be assigned first then reassign prev node to not lose
//      reference.

// CONS of Linked Lists:
// -Search operations are slow in linked lists. Unlike arrays, random access
//      of data elements are not allowed. Nodes are accessed sequentially starting with
//      the first node. O(n) in LL since it would have to traverse all previous nodes.
//      Regular arrays search/access operation is O(1) by searching index.
// -Also uses more memory than arrays because of the storage of the pointers

//              Array   Linked List (all variations)
//  access      O(1)    O(n)
//  insert      O(n)    O(1)
//  delete      O(n)    O(1)

// Three types of linked lists:

// 1. Singly linked lists with "next" property pointing to next node
// 2. Doubly linked lists with pointer to next node and previous node
// 3. Circular linked lists: last node points to the first node or any other node before it
//      thereby forming a loop

// Implement List Node in JS

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // this is initialized to "null" then it gets assigned later
  }
}

// Implementing a Linked List in JS

class LinkedList {
  constructor(head = null) {
    // head is initialized to "null" - can be reassigned later
    // head means head node
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      // if list is empty and has no node then this is assigned head
      this.head = new Node(value);
      return;
    }

    // traversing through entire list until it reaches the node with next = null
    let current = this.head; // initialize this to the first node
    while (current.next !== null) {
      current = current.next; // reassign the current node to the next until reaches next = null
    }
    current.next = new Node(value); // after while loop exits, new node gets appended & its next pointer is defaulted to null via constructor
  }

  delete(head, target) {}

  print() {
    let str = "";
    let current = this.head;
    while (current !== null) {
      // traverse through all node, check if node exist
      str += current.value + " -> ";
      current = current.next;
    }
    console.log(str);
  }

  contains(target) {
    let current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return console.log(true);
      }
      current = current.next;
    }
    return console.log(false);
  }
}

// -------------- Coderbyte
const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.print();

// list.contains("a");
// list.contains("b");
// list.contains("c");
// list.contains("d");
// list.contains("x");
// list.contains("z");
// --------------

// Creating a linked list with the class. Create 2 nodes with node1 -> node2

// let node1 = new Node(2);
// let node2 = new Node(5);
// node1.next = node2;

// let list = new LinkedList(node1);
// console.log(list.head.next.value); // returns 5

// Creating Linked List methods:
// 1. size()
// 2. clear()
// 3. getLast()
// 4. getFirst()
// These should be methods of the class

// function size() {
//   let count = 0;
//   let node = this.head;
//   while (node) {
//     count++;
//     node = node.next;
//   }
//   return count;
// }

// function clear() {
//   this.head = null;
// }

// function getLast() {
//   let lastNode = this.head;
//   if (lastNode) {
//     while (lastNode.next) {
//       lastNode = lastNode.next;
//     }
//   }
//   return lastNode;
// }

// function getFirst() {
//   return this.head;
// }
