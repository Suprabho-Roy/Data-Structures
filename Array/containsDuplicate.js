const arr1 = [1,2,3,1];
const arr2 = [1,2,3,4];

function containsDuplicate(a){
    let numbers = new Set();

    for(let i = 0; i < a.length; i++){
        if(!numbers.has(a[i])){
            numbers.add(a[i]);
        }else{
            return true;
        }
    }

    return false;

}

let result = containsDuplicate(arr2);
console.log(result);