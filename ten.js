

// Write a function to check if a given string is a palindrome.

function ispalindrome(n){
    let reversed=n.split('').reverse().join('')
    return n===reversed;
}
n="madam"
console.log(ispalindrome(n))