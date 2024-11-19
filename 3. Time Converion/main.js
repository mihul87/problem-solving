// test 0;
const s = '12:05:45AM';

// test 1;
// const s = '07:05:45AM';

// test 2;
// const s = '12:05:45PM'; 

// test 3;
// const s = '07:05:45PM';

const time =  s.slice(0, 8);
const format = s.slice(-2);
let [hours, minutes, seconds] = time.split(":");
if (format === 'AM' && hours === '12') { hours = "00"}
if (format == "PM" && hours !== '12') {
    hours = Number(hours) + 12;
}
console.log(`${hours}:${minutes}:${seconds}`)