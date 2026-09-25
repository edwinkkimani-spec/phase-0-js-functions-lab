function calculateTax(amount) {
  let tax = amount * 0.10
  return tax;
}

console.log("Amount:",calculateTax(1000)+"%")

console.log("Kimani:",calculateTax(500)+"%");

function convertToUpperCase(text) {
  return text.toUpperCase();
}

console.log(convertToUpperCase("Hello 123444"))

function findMaximum(num1,num2) {
   if(num1>num2) {
    return num1;
   } else {
      return num2;
 
    } 
    
  
}

let a = 9;
let b = 10;
let final = findMaximum(9,10);
console.log(final);



function isPalindrome(word) {
  let reversedWord= "" ;

  for(let i=word.length-1; i>=0; i--) {

   reversedWord = reversedWord+word[i];
}

   if(word === reversedWord) {
      return true;
   } else{
    return false;
  }
     return result;
}



let word ="madam";
let result = isPalindrome(word);

console.log(result);

function calculateDiscountedPrice(originalPrice,discountPercentage) {
  let discountAmount = originalPrice *(discountPercentage/100);
  let finalprize = originalPrice-discountAmount; 
  
   return finalprize;  

 }
let productPrize = 1000;
let discountPercentage =20;

let finalprize =calculateDiscountedPrice(productPrize,discountPercentage);

console.log(discountPercentage+"%")
console.log("Best price for customer: "+"ksh "+finalprize);

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};