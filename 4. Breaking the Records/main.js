const scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1];
let minScore = scores[0];
let maxScore = scores[0];
 let [ breakMostPoints, breakLeastPoints] = [ 0, 0];
 for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minScore) { 
        minScore = scores[i];
        breakLeastPoints++;
        console.log('Min Score: ', minScore)
        continue;
    }
    if (scores[i] > maxScore) { 
        maxScore = scores[i];
        breakMostPoints++;
        console.log('Max Score: ', maxScore);
    }
 }
 console.log( breakMostPoints, breakLeastPoints );
//  return [ breakMostPoints, breakLeastPoints ];