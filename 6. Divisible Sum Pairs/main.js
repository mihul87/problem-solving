const k = 3;
const ar = [1, 3, 2, 6, 1, 2]
const n = ar.length;
let divisibleSumPairsCount = 0;

for(let i=0; i<n; i++) {
 for(let j=0; j<n; j++) {
  if ( i<j && (ar[i] + ar[j]) % k === 0) {
    divisibleSumPairsCount++;
  }
 } 
}

console.log(divisibleSumPairsCount);