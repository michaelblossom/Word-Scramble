
// function to scramp worsd
function wordToScramble(word) {
    if (word.length <= 2) {
        return word;
    }
    var middle = word.slice(1, -1);
    var middleArray = middle.split('');
    for (var i = middleArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // var j = wordsToScramble;
        var temp = middleArray[i];
        middleArray[i] = middleArray[j];
        middleArray[j] = temp;
    }
    return word[0] + middleArray.join('') + word[word.length - 1];
}