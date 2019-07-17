const quickSort = (arry,start=0,end=arry.length-1) => {
    if( start < end) {
        let parttionIndex = parttion(arry,start,end);
        quickSort(arry,start,parttionIndex-1);
        quickSort(arry,parttionIndex+1, end);
        return arry;
    }
}

const parttion = (arry,start,end) => {
     let pivote=arry[start];
     let pivoteIndex = start;
     for(var i =  start + 1 ; i < arry.length ; i ++){
         if(arry[i] <= pivote){
                pivoteIndex++
                swap(arry,i,pivoteIndex );
         }
     } 
     swap(arry,start,pivoteIndex );
     return pivoteIndex;
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