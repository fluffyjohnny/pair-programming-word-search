const transpose = function (matrix) {
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


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(vs => vs.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const v of verticalJoin) {
        if (v.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;