const str = "A phrase or clause is part of a sentence";


function longestWord(str){
    var words = str.split(" ");
    let max = 0;
    let current = 0;

    for(let i = 0; i < words.length; i++){
        strtemp = words[i].toString();
        current = strtemp.length;

        if(current > max){
            max = current;
            var index = i;
        }
    }

    console.log(max, words[index]);
}

longestWord(str);