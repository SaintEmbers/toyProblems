//Given a binary tree, find its maximum depth.

//The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  var maxDepth = 0
  if(root === null){return maxDepth}

  function recurse(node, counter){
    if(node.left===null && node.right === null){
      if(counter > maxDepth){
        maxDepth = counter
      }
    }

    if(node.left){
      recurse(node.left, counter+1)
    }

    if(node.right){
     recurse(node.right, counter+1)
    }
  }

  recurse(root, 1);
  return maxDepth;
};










