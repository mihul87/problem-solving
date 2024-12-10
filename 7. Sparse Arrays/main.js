const strings = [ 'aba', 'baba', 'aba', 'xzxb' ];
const queries = [ 'aba', 'xzxb', 'ab' ]
let sparseArray = [];


for(let i=0; i < queries.length; i++) {
    let sparseCount = 0; 
    for (let j=0; j < strings.length; j++) {
        if (queries[i] === strings[j]) { sparseCount += 1; console.log(strings[j], queries[i], sparseCount);}
    }
    sparseArray.push(sparseCount);
}
console.log(sparseArray);