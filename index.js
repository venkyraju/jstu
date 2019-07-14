import parrtenMap from './kmpParrtenMap';
console.log(parrtenMap('acbacdabcy')); // [0, 0, 0, 1, 2, 0, 1, 0, 0, 0]
console.log(parrtenMap('dsgwadsgz')); // [0, 0, 0, 0, 0, 1, 2, 3, 0]