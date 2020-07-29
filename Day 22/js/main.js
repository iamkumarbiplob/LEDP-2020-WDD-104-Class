// var number1=10;
// var number2=20;

// document.write("Number1: "+number1+"<br>Number2: "+number2+"<br><br><hr>");


// document.write("number1 > number2: "+(number1>number2));
// document.write("<br>");



// document.write("number1 >= number2: "+ (number1>=number2));
// document.write("<br>");




// document.write("number1 < number2: "+(number1<number2));
// document.write("<br>");


// document.write("number1 <= number2: "+(number1<=number2));
// document.write("<br>");


// document.write("number1 === number2: "+(number1===number2));
// document.write("<br>");

// document.write("number1 != number2: "+(number1!=number2));
// document.write("<br>");


// document.write("number1 !== number2: "+(number1!==number2));
// document.write("<br>");



// document.write("<br><hr>");
// document.write("<br>");
// document.write();



// var number=prompt("Enter a number");

// if(number>0){
//     document.write("Possitive");
// }
// else if(number<0){
//     document.write("Negative");
// }
// else{
//     document.write("Zero");
// }


// document.write("<br>");



// document.write("<br><hr>");




var l = prompt("Enter a Single Letter");

if (l.length > 1) {
    alert("You are enter More than one charecter.");
}

else if (l === '') {
    alert("Blank Input.");
}
else {
    if (l == 'a' || l == 'A' || l == 'e' || l == 'E' || l == 'i' || l == 'I' || l == 'o' || l == 'O' || l == 'u' || l == 'U') {
        alert(l + " : is a Vowel.");
    }
    else if (l >= "0" && l <= "9") {
        alert(l + " : is a Number.");
    }
    else {
        alert(l + " : is a Consonent");
    }
}


// --------------------------------------------------Number checking system-----------------------------------------------

