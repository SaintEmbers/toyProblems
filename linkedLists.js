// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists.
// Try to use the push() function within your buildOneTwoThree() function.

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  var thisNode = new Node(data);
  thisNode.next = head;
  return thisNode
}

function buildOneTwoThree() {
   var ll1 = push(null, 3)
   var ll2 = push(ll1, 2)
   var ll3 = push(ll2, 1)
   return ll3
}
