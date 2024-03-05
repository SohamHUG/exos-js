// function isPalindrome(word) {
//     const splitted = word.split('');
//     const reversedArray = splitted.reverse();
//     const reversedWord = reversedArray.join('');
//     if (word.toLowerCase() === reversedWord.toLowerCase()) {
//         return true;
//     }
//     return false;
// }

// function isPalindrome(word) {
//     return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
// }

const isPalindrome = word => 
    word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
    
console.log(isPalindrome('kayak'));
console.log(isPalindrome("maison"));
console.log(isPalindrome("Anna"));

