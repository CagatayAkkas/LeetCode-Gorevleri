var isSubtree = function (s, t) {
  if (!t) {
    return true;
  }
  if (!s) {
    return false;
  }
  if (isSameTree(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSameTree = function (s, t) {
  if (!s && !t) {
    return true;
  }
  if (!s || !t || s.val !== t.val) {
    return false;
  }
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};
