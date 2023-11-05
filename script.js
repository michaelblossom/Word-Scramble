
// FUNCTION TO SCRAMBLE TEXT

function scrambleText() {
    var inputText = document.getElementById("inputText").value;
    var wordsToScramble = document.getElementById("wordsToScramble").value.trim().split(' ');

    var wordsArray = inputText.split(' ');

    for (var i = 0; i < wordsArray.length; i++) {

        if (wordsToScramble.includes(wordsArray[i])) {
            wordsArray[i] = scrambleWord(wordsArray[i]);
        }
        // wordsToScramble = wordsToScramble.toString().replace("wordsToScramble", "*****");

    }

    document.getElementById("outputText").innerText = wordsArray.join(' ');
    
    
}
// function to scramp worsd
function scrambleWord(word) {
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