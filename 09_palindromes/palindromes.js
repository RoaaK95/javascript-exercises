const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const primeString= str
                         .toLowerCase()
                         .split('')
                         .filter(char=> alphanumerical.includes(char))
                         .join('');
   
   const reversedString= primeString.split('').reverse().join('');

   return primeString===reversedString;
};
// Do not edit below this line
module.exports = palindromes;
