
arr = [-4, 3, -9, 0, 4, 1]
const length = arr.length;
let [negative, positive, zeroes] = [0, 0, 0];

for (let i = 0; i < length; i++) {
 switch (Math.sign(arr[i])) {
        case -1:
            negative++
            break;
        case 1:
            positive++;
            break;
        default:
            zeroes++;
        }
}

console.log((positive / length).toPrecision(6));
console.log((negative / length).toPrecision(6));
console.log((zeroes /length).toPrecision(6));