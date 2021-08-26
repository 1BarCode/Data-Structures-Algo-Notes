// Trees have 2 properties
// Has a root node & unique path between any pair of node

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       a
//      / \
//    b     c
//   / \     \
//  d   e     f

// Depth First Search - DFS
// - Uses a stack

// pre order
// const dfs = (root) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const curr = stack.pop();

//     console.log(curr.val);

//     if (curr.right !== null) {
//       stack.push(curr.right);
//     }
//     if (curr.left !== null) {
//       stack.push(curr.left);
//     }
//   }
// };

// dfs(a);
// abdecf

const dfsRec = (root) => {
  if (root === null) return 0;

  console.log(root.val);

  let l1 = dfsRec(root.left);
  let l2 = dfsRec(root.right);
};

// dfsRec(a);

// Max Depth of BT

const MaxDepth = (root) => {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(MaxDepth(root.left), MaxDepth(root.right));
};

MaxDepth(a);

// Breath First Search - BFS
// - Uses a queue

//       a
//      / \
//    b     c
//   / \     \
//  d   e     f

const bfs = (root) => {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();

    console.log(curr.val);

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
};

// bfs(a);
