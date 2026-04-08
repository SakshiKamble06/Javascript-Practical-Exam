let text = "Learning JavaScript is fun! Fun and easy to learn JavaScript.";

text = text.toLowerCase();

text = text.replace();

let words = text.split(" ");

let result = {};

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (result[word]) {
        result[word]++;
    } else {
        result[word] = 1;
    }
}

console.log(result);