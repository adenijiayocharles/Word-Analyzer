document.getElementById("submit").addEventListener("click",function(){
	var word = document.getElementById("word").value;
	var result = document.getElementById("result");
	var vowelString, consonantString, punctuationString, numberStrings;
	var vowel  = [];
	var consonant = [];
	var numbers = [];
	var punctuation = [];
	var vowelCount = 0;
	var consonantCount = 0;
	var punctuationCount = 0;
	var numberCount = 0;	
	var spaceCount = 0;

	// get length of word
	var wordLength = word.length;
	for(var i = 0; i < wordLength; i++){
		var character = word[i];
		var charASCII = character.charCodeAt();

		if((charASCII >= 97 && charASCII <= 122) || (charASCII >= 65 && charASCII <= 90)){

			if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
				vowel.push(character);
				vowelString += character;
				vowelCount++;
			}else{
				consonant.push(character);
				consonantString += character;
				consonantCount++;		
			}			
	
		}else if(charASCII >= 48 && charASCII <= 57){

			numbers.push(character);
			numberStrings += character;
			numberCount++;

		}else if((charASCII >= 33 & charASCII <= 64) || (charASCII >= 91 & charASCII <= 96) || (charASCII >= 123 & charASCII <= 126)){

			punctuation.push(character);
			punctuationString += character;
			punctuationCount++;

		}else if(charASCII == 32){
			spaceCount++;
		}
	
	}

	document.getElementById("wordCount").innerHTML = "Total number of characters: " + wordLength;
	document.getElementById("consonantCount").innerHTML = "Total number of consonant: " + consonantCount;
	document.getElementById("vowelList").innerHTML = "Lists of vowels: " + vowel.join(", ");
	document.getElementById("consonantList").innerHTML = "Lists of consonant: " + consonant.join(", ");
	document.getElementById("vowelCount").innerHTML = "Total number of vowels: " + vowelCount;
	document.getElementById("numberCount").innerHTML = "Total number of numbers: " + numberCount;
	document.getElementById("punctuationList").innerHTML = "Total number of punctuation marks: " + punctuationCount;
	document.getElementById("spaceList").innerHTML = "Total number of spaces: " + spaceCount;

});