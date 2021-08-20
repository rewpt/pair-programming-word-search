const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  for (let c = 0; c < matrix[0].length; c ++) {
    result.push([]);
    for (let r = 0; r < matrix.length; r++) {
      result[c].push(matrix[r][c]);
    }
  }
  return result;
};

const check = function(wordMap, word) {
  const horizontalJoin = wordMap.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  //Horizontal check
  const horCheck = check(letters, word);
  let newArr = transpose(letters);
  //Vertical check
  const vertCheck = check(newArr, word);
  if (horCheck === true || vertCheck === true) {
    return true;
  }

  return false;
};


module.exports = wordSearch;



