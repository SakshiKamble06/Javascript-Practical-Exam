// Reverse String but 
function reverseString(str){
  let words = str.split(' ')
    let reverseWords = words.map(word => 
      word.split('').reverse().join(''))
      let result=reverseWords.join(' ')
   return result
}
console.log(reverseString("Hello World From Wisdom Sprouts IT Training Hub"))






