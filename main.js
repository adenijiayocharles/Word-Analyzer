var vowel = [];
var consonant = [];
var consonantCount = 0;
var vowelCount = 0;

var word = window.prompt(" Please enter the sentence or word to analyse");

// get length of word
var wordLength = word.length;

for(var i = 0; i < wordLength; i++){
	var character = word[i];
	if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
		vowel.push(character);
		vowelCount++;
	}else{
		consonant.push(character);
		consonantCount++;
	}
}

console.log(vowelCount);
console.log(consonantCount);
console.log(vowel);
console.log(consonant);