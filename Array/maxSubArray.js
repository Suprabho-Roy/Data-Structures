const arr = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArray(ar){
    let solution = ar[0];

    for(let i = 1; i<ar.length-1; i++){
        ar[i] = Math.max(ar[i], ar[i] + ar[i-1]);
        solution = Math.max(solution, ar[i]);
    }

    console.log(solution);
}

maxSubArray(arr);