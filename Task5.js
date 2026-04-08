function stringSlug(str1){
  str1.toLowerCase();

let newStr =""
let punctuation ="!,.@?"
for(i=0;i<str1.length; i++){
  if(punctuation.includes(str1[i])){
    continue;
  }
  str1 = str1.replaceall(" ","-");
  console.log(newStr);
}
str1("Learn JavaScript in 30 Days!")
  

}