import parrtenMap from './kmpParrtenMap';
import {
    parttion,
    quickSort,
    swap
} from './quicksort';

console.log(quickSort([3,7,2,1,6,8,5,9,4], 0 , 8 ))// [2,1,3,4,8,5,7,8]

console.log(parrtenMap('acbacdabcy')); // [0, 0, 0, 1, 2, 0, 1, 0, 0, 0]
console.log(parrtenMap('dsgwadsgz')); // [0, 0, 0, 0, 0, 1, 2, 3, 0]