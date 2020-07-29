var fstname = 'Biplob';
var lstname = ' Kumar.';
var fulname = fstname.concat(lstname)
document.write(fulname + '<br>');




var name = "Freelancer";
var nameOut = name.slice(1, 6);
document.write(nameOut);




var number1 = 22;
console.log(typeof (number1));




var number1 = 25;
number1=toString(number1);
console.log(typeof(number1));






var number1= "24";
number1=parseInt(number1);
console.log(typeof(number1));






var number1= "24.2";
number1=parseFloat(number1);
console.log(typeof(number1));


var number1=3.14169999999;
console.log(number1.toFixed(4));


var number=333.45667;
console.log(number.toPrecision(4));








console.log(Number("25"));
console.log(typeof(Number("25")));

console.log(Number(false));
console.log(Number(true));