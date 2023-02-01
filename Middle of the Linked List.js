var middleNode = function(head) {
  fast = head
  while (fast.next!=null) {
    head = head.next;
    fast = fast.next.next;
    if(fast == null) return head
  }
  return head
};
