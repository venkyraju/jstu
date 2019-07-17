const mergeSort = (arry) => {
    if(arry.length < 2) return;
    const midIndex = Math.floor(arry.length /2);
    const left =[], right =[];
    arry.map((v,i)=> {
        if(i < midIndex ) {
            left.push(v)
        }
        else{right.push(v)}
    });
    mergeSort(left);
    mergeSort(right);
    // merge(left,right,arry);
    return merge(left,right,arry);
}
const merge =(left,right,arry) => {
    const n = left.length;
    const m = right.length;
    let i = j = k = 0 ;
    while( i < n && j < m) {
        if(left[i] < right[j]) {
            arry[k] = left[i];
            i++; k++
        }
        else {
            arry[k] = right[j];
            k++;j++;
        }
    }
    while(i < n){
        arry[k] = left[i];
        i++; k++;
    }
    while(j < m) {
        arry[k] =  right[j];
        j++;k++
    }
    return arry
}