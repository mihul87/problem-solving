const arr = [1,3,5,7,9]
arr.sort(function(a, b){return a-b});
const sum = arr.reduce((a, b) => a + b, 0)
console.log(sum - arr[4], sum - arr[0]);
