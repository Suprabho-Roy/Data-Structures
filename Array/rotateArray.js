const arr = [1,2,3,4,5,6,7];

function rotateArray(arr, k){
    k = k % arr.length;

    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);

    console.log(arr);
}

var reverse = function(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

rotateArray(arr,3);