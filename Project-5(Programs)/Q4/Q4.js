let data = [10,20,30,40,50,60];

let index = data.indexOf(40);
console.log("index of 40:",index);

let shiftdata = data.shift();
console.log("shifted data:",shiftdata);
console.log("after shift",data);

data.unshift(5,15);
console.log("unshifted data:",data);