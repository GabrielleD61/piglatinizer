// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
 
// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
	$("#PL").click(function() {
    	function latinize (){
			var word= $("input").val();  
			return  word + "ay" ; 
		}
		function wordToPigLatin (){
			var word= $("input").val(); 
			var split= word.split();
			return ;
		}
		function sentenceToPigLatin (sentence){
			var sentence = "";
			var word = $("input").val();
			var split = word.split("");
			var length = word.length
			
			for(var i = 0; i < length; i++){
				word += split[i]  + "ay" + " ";
			}
		}
		$("#output").text(latinize());
			
			
			
	
	});

	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


