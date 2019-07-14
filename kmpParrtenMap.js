const parrtenMap = (pattren) => {
    const ptArray = pattren.split('');
    let pstMatch = [0];
    let j = 1;
    let i = 0;
    while( j < ptArray.length ) {
        if(ptArray[i] === ptArray[j]) {
            pstMatch[j] = i+1;
            i++;
            j++;
        } else if( i > 0 ) {
            i = pstMatch[i - 1];
        } else { 
            pstMatch[j] = pstMatch[i];
            j++;
         }
    }
    return pstMatch;
}

export default parrtenMap