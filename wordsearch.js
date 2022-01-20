const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result.push([matrix[i][j]]);
      } else {
        result[j].push(matrix[i][j]);
      }
    }
  }
  return result;
};


const horizontalReverse = (y) => {
  y.map(x => x.reverse());
  return y;
};
const verticalReverse = (y) => {
  let x = transpose(y);
  x.map(x => x.reverse());
  return x;
};


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin =  transpose(letters).map(vs => vs.join(''));
  const hRevJoin = horizontalReverse(letters).map(x => x.join(''));
  const vRevJoin = verticalReverse(letters).map(x => x.join(''));

  console.log(horizontalJoin);
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  for (const x of hRevJoin) {
    if (x.includes(word)) return true;
  }
  for (const y of vRevJoin) {
    if (y.includes(word)) return true;
  }
  return false;
};



module.exports = wordSearch;

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');