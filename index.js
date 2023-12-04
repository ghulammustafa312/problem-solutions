// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  if (tree.left < tree.value && tree.right > tree.value) {
    validateBst(tree.left);
    validateBst(tree.right);
  } else {
    console.log("not a binary tree");
  }
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
