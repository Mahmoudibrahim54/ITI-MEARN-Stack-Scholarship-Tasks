let obj = {
  [Symbol.replace](str) {
    if ((str.length > 15)) {
      let newStr = str.slice(15);
      newStr += "...";
      return newStr;
    }
    else returnstr;
  },
};

console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh".replace(obj));
