function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let i = 1;
    let j = 1;
    let array1Item = array1[0];
    let array2Item = array2[0];

    if(array1.length === 0){
        console.log(array2);
    }

    if(array2.length === 0){
        console.log(array1);
    }

    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }

    }

    console.log(mergedArray);
}

mergeSortedArrays([0,3,4,31], [4,6,30]);