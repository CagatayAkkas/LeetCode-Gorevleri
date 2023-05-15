var isPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlpha(s[l])) {
      l++;
    }

    while (r > l && !isAlpha(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

var isAlpha = function (letter) {
  const charCode = letter.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122) ||
    (charCode >= 48 && charCode <= 57)
  );
};
