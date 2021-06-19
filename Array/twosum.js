const arr = [2,7,11,15]

function twosum(target){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-1;j++){
            let sum = arr[i]+arr[j];
            if(sum === target){
                console.log(arr[i],arr[j]);
                i = arr.length + 1;
            }
        }
    }
}

twosum(9)