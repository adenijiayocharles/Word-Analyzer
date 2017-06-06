var vowel = [];
var consonant = [];
var numbers = [];
var punctuation = [];
var vowelString;
var vowelCount = 0;
var consonantString;
var consonantCount = 0;
var punctuationCount = 0;
var punctuationString;
var numberStrings;
var numberCount = 0;

var word = window.prompt("Please enter the sentence or word to analyse:");

// get length of word
var wordLength = word.length;

for(var i = 0; i < wordLength; i++){
	var character = word[i];
	var charASCII = character.charCodeAt();
	if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
		vowel.push(character);
		vowelString += character;
		vowelCount++;
	}else if((charASCII >= 33 & charASCII <= 64) || (charASCII >= 91 & charASCII <= 96) || (charASCII >= 123 & charASCII <= 126)){
		punctuation.push(character);
		punctuationString += character;
		punctuationCount++;
	}else if(charASCII >= 48 && charASCII <= 57){
		numbers.push(character);
		numberStrings += character;
		numberCount++;		
	}else{
		consonant.push(character);
		consonantString += character;
		consonantCount++;		
	}
}

console.log(wordLength);
console.log(vowel);
console.log(vowelCount);
console.log(vowelString);
console.log(consonant);
console.log(consonantCount);
console.log(consonantString);
console.log(punctuation);
console.log(punctuationCount);
console.log(punctuationString);
console.log(numbers);
console.log(numberCount);
console.log(numberStrings);