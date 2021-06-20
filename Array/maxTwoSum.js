const arr = [4,-1,2,1];

function maxTwoSum(ar){
    let max = 0;
    let current = 0;
    let arrayIndex = 1;
    for(let i = 0; i<ar.length-1; i++){
        for(let j=arrayIndex; j<ar.length-1; j++){
            current = ar[i] + ar[j];

            if(current > max){
                max = current;
            }else{
                current = 0;
                continue;
            }

        }
        arrayIndex++;
    }

    console.log(max);
}

maxTwoSum(arr);
