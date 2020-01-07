//converting filesize (bytes) into human readable file size

console.log(Math.log10(1000));
//10^3 = 1000
console.log(Math.log10(10000));
//10^4 = 10000

const filesize  =1100; //bytes
const units = "BKMGT";

//......1000 ......100000......1000000000
//log10
//......3..........6...........9.........
//log10(filesize)/3
//0.....1..........2...........3..........

const index = Math.floor(Math.log10(filesize)/3);

//700 -> 700/1024^0
//10000 -> 10000/1024^1
//10000000 -> 10000000/1024^2

const filesizeHuman = (filesize/Math.pow(1024,index)).toFixed(1);

console.log(`${filesizeHuman}${units[index]}`);
