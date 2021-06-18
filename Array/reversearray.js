var sent = "Very Good Well Done";

function reverse(str){

    if(!str || str.length < 2 || typeof str !== 'string'){
        return console.log('input error');
    }

    var arr = str.split("");
    var arr2 = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    var str2 = arr2.join("");
    console.log(str2);
}

function reverse2(str){
    console.log(str.split('').reverse().join(''));
}

const reverse3 = str => console.log([...str].reverse().join(''));

reverse(sent);
reverse2(sent);
reverse3(sent);