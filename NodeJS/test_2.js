//"a|n|a".length/2 =parseInt(1.5) = 1
//"ab||ba".length/2 =parseInt(2) = 2

function isPalindrome(word) {// "Lamina animal"
//paqr o impar
// parseInt((13/2)) = 6
var enMedio = parseInt((word.length/2)) - 1;//5
//012345|6|543210
//012345|6|789 10 11
for(var i = 0; i <= enMedio; i++) {
    if(word[enMedio - i] === word[enMedio + i]) { //This is the wrong line.
        var palindrome = true;
        } else {
            var palindrome = false;
        };
    };
    return palindrome;
};

isPalindrome("ana");
