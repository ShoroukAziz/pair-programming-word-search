const wordSearch = (letters, word) => {
    if (letters == false) return false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    const bacwards = word.split('').reverse().join('');

    for (const l of horizontalJoin) {
        if (l.includes(word) || l.includes(bacwards)) return true;
    }

    for (const l of verticalJoin) {
        if (l.includes(word) || l.includes(bacwards)) return true;
    }

    if (diagonalSearch(letters, word)) return true;

    return false;
}

const transpose = (letters) => {
    let filteredArray = [];

    for (let x = 0; x < letters[0].length; x++) {
      let tempArray = [];
  
      for (let row of letters) {
        tempArray.push(row[x]);
      }
  
      filteredArray.push(tempArray);
    }
  
    return filteredArray;
};

const diagonalSearch = (lettersArray, string) => {
    let array = lettersArray.map(ls => ls.join('')).join('').split('');
    const word = string.split('');

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word[0]) {
          for (let x = 1; x < word.length; x++) {
            if (word[x] === array[i+(lettersArray.length*x)]) {
              if (x === word.length - 1) {
                return true;
              }
              continue;
            } else {
              break;
            }
          }
        }
      }
} 

module.exports = wordSearch