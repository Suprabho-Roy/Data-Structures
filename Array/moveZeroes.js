const arr = [1,1,0,3,0,12];

function moveZeroes(a){
    let anchor = 0;

    for(let explorer = 0; explorer < a.length; explorer++){
        if(a[explorer] !== 0){
            let temp = a[anchor];
            a[anchor] = a[explorer];
            a[explorer] = temp;

            anchor++;
        }
    }

    console.log(a);
}

moveZeroes(arr);

