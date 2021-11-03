console.log(!true);
console.log(!false);
console.log(!!false);
console.log(!!true);
console.log(!1);
console.log(!!1);
console.log(!0);
console.log(!!0);
console.log(!!"");

let x = 5;
let y = 9;

console.log((x<10 && x!==5))
console.log((x>9 || x===5))
console.log(!x===y)

Ex2

let x=10
let y= "a"
console.log((y==="b") || (x>=10))

let x=3
let y=8
console.log(!((x=="3" || x===y)) && !((y!==8 && x<=y)))

let str = ""
let msg = "haha"
let eBonito = "false"

console.log(!((str || msg) && eBonito))
