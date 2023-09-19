const recordset = {
  name: "Area A",
  population: 10000,
  location: "City X",
};

console.log(typeof recordset);
console.log(recordset);

var entry = Object.entries(recordset);

console.log(...entry.slice(0,2));

let v1 = 243
console.log(typeof v1)
console.log(isNaN(v1))
var date = Date() 
console.log(typeof(date))
 var dat = date.split(' ')
 console.log(typeof dat)
 console.log(dat[2],dat[1],dat[0],dat[3])

// console.log(dat(0,3))
console.log(!isNaN((12)))
console.log(isFinite(dat[3]))
console.log(typeof dat[3])
let array1 = [2,3,4,67,2]
// console.log(array1[])