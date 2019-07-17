const quickSort = (arry,start=0,end=arry.length-1) => {
    if(start < end ) {
        const ptIndex = parttion(arry,start,end);
        quickSort(arry, start, ptIndex-1);
        quickSort(arry, ptIndex+1, end);
        return arry;
    }
}

const parttion = (arry,start,end) => {
    let pivote = arry[end];
    let ptIndex = start;
    for( let i = start ; i < end ; i++) {
        if(arry[i] <= pivote){
            swap(arry,i,ptIndex);
            ptIndex++
        }
        else {
            swap(arry,i,ptIndex);
        }
    }
    swap(arry,ptIndex,end);
    return ptIndex;
    // return arry;
};

const swap = (arry,i,j) => {
    const temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp
}

export  {
    parttion,
    quickSort,
    swap
}

