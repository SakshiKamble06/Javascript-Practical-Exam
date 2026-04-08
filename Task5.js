function StringSlug(str){
    let result= ""
    let punc="!,.@?"
 str.replaceAll("","-")
   for(let i=0;i<str.length;i++){
    if(punc.includes(str[i])){

        continue;
    }
     result +=str[i].toLowerCase()
   }
console.log(result.replaceAll(" ","-"))   
}
StringSlug("Learn Javascript in 30 days!")