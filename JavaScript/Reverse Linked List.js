var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let nextNode = null;

  while (curr !== null) {
    nextNode = curr.next; //2     3
    curr.next = prev; //2 ->  1-> null
    prev = curr; //4-> 3->2-> 1-> null
    curr = nextNode; //2 //3
  }
  return prev;
};
