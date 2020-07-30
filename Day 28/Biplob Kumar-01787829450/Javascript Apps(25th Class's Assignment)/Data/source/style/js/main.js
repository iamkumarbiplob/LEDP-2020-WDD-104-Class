// ------------------------------------Preloader -----------------------
var myVar;

function pre_loader_custom() {
    myVar = setTimeout(showPage_main_div, 3000);
}

function showPage_main_div() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("my_custom_div").style.display = "block";
}

// ---------------------------------index page loading--------------------------------
(function () {
    'use strict';
    var sec;
    var waitClock = setInterval(onGenerateColor, 1000);
    function onGenerateColor() {
        sec = $('#wait-sec').text();
        if (sec == 1) {
            clearInterval(waitClock);
            window.location.href = './Data/registration.html';
            // sec = 10;
        }
        sec--;
        $('#wait-sec').text(sec);
        var r = Math.floor((Math.random() * 254) + 1);
        var g = Math.floor((Math.random() * 254) + 1);
        var b = Math.floor((Math.random() * 254) + 1);
        var rgb = r + ',' + g + ',' + b;
        $('#wait-sec').css('color', 'rgb(' + rgb + ')');
        $('.spin').addClass('spinner-border');
        $('.spin').css('color', 'rgb(' + rgb + ')');
    }
})();

// ----------------------------------------login page------------------------------------------
function show_password() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function login_here() {
    var uname = login_form.uname.value;
    var password = login_form.pass.value;

    if (uname === "" || password === "") {
        $('#wrong').text('Username or password field blank');
    }
    else if (uname != "biplob" || password != "ledp") {
        $('#wrong').text('Wrong Username or password');
    }
    else if (uname === "biplob" && password === "ledp") {
        window.location.assign("./dashboard.html");
        // $('#wrong').text(' Username or password correct');
    }
    else {
        $('#wrong').text('Something wrong');
    }
}

// -----------------------------------------dashboard page--------------------------------------------------------

// ******************************Time*********************************
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh);
}
function display_ct() {
    var x = new Date();
    document.getElementById('ct').innerHTML = x;
    display_c();
    var d = Date.now();
    var d = new Date(d);

    var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = weekdayNames[d.getDay()] + ", " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear() + ', ' + (d.getHours() > 12 ? ((d.getHours() - 12) <= 9 ? ('0' + (d.getHours() - 12)) : (d.getHours() - 12)) : d.getHours()) + ':' + (d.getMinutes() <= 9 ? ('0' + d.getMinutes()) : d.getMinutes()) + ':' + (d.getSeconds() <= 9 ? ('0' + d.getSeconds()) : d.getSeconds()) + ' ' + (d.getHours() >= 12 ? "PM" : "AM") + ' ( ' + Intl.DateTimeFormat().resolvedOptions().timeZone + ' ).';

    document.getElementById('ct').innerHTML = d;
    // console.log(d);
}


// ----------------------------------------------Temperature-------------------------------------------------------

function converttof_f() {
    var celcious = converter_form.input_value.value;
    celcious = parseFloat(celcious);

    var fahrenheight = (celcious * (9 / 5)) + 32;
    fahrenheight = Math.round(fahrenheight * 100) / 100

    // $('#fahrenheight').text(fahrenheight+" °F");
    // $('#fahrenheight').addClass('text-danger');
    // $('#celcius').text(celcious+" °C");
    // $('#celcius').addClass('text-danger');
    $('#Output1').text("In Celcius: " + celcious + " °C");
    $('#Output2').text("In Fahrenheight: " + fahrenheight + " °F");
}
function converttof_c() {
    $('#title_modal').text("Fahrenheight to Celcious");
    var fahrenheight = converter_form.input_value.value;
    fahrenheight = parseFloat(fahrenheight);

    var celcious = (fahrenheight - 32) * (5 / 9);
    celcious = Math.round(celcious * 100) / 100;

    $('#Output1').text("In Fahrenheight: " + fahrenheight + " °F");
    // $('#fahrenheight').addClass('text-danger');
    $('#Output2').text("In Celcius: " + celcious + " °C");
    // $('#celcius').addClass('text-danger');
}




// ---------------------------------------------------Greding System---------------------------------

function convertgpa() {
    var name = converter_form.fname.value;
    var marks = converter_form.marks.value;
    var point = "Not given";
    var gpa = "Not Given";
    var alert_pop = "";
    marks = parseInt(marks);

    if (marks >= 80 && marks <= 100) {
        gpa = "A+";
        point = "5.00";
        alert("Hurray, You got GPA 5.00");
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 70 && marks <= 79) {
        gpa = "A";
        point = "4.00";    
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 60 && marks <= 69) {
        gpa = "A-";
        point = "3.5";
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 50 && marks <= 59) {
        gpa = "B";
        point = "3.00";
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 40 && marks <= 49) {
        gpa = "C";
        point = "2.00";
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 33 && marks <= 39) {
        gpa = "D";
        point = "1.00";
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks >= 0 && marks <= 32) {
        gpa = "F";
        point = "0.00";
        alert("Sorry, You are Fail");
        $('#output1').text("Hey, " + name);
        $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
    }
    else if (marks > 100 || marks < 0) {
        alert_pop = "You Enter The marks more then or less then 100.";
        $('#output2').text(alert_pop);
    }
    else {
        alert_pop = "Sorry, Somthing is Wrong";
        $('#output2').text(alert_pop);
    }

    // $('#output1').text("Hey, " + name);
    // $('#output2').text("You Got GPA " + point + " (" + gpa + ") out of 5.00");
}


// ---------------------------------------------vowel consonant checking--------------------------------------------

function check_letter() {
    var letter = letter_form.letter.value;
    var lettero=letter;
    if (letter.length > 1) {
        $('#output1').text("You Enter More than One Cheracter");
    }
    else {
        letter = letter.toLowerCase();

        if (letter >= 0 || letter<0) {
            $('#output1').text("You Enter: "+lettero);
            $('#output2').text("You Entered Character was Number.");
            // console.log('Number');
        }
        else if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            // console.log('Vowel');
            $('#output1').text("You Enter: "+lettero);
            $('#output2').text("You Entered Character was Vowel.");
        }
        else{
            $('#output1').text("You Enter: "+lettero);
            $('#output2').text("You Entered Character was Consonant.");
            // console.log('Consonant');
        }
        // console.log(letter);
    }

}

// -------------------------------Number checking system---------------------------
function check_odd_even(){
    var number=number_form.number.value;
    var neg_poss='Which is ';
    var odd_even='The number is ';

    if(number<0){
        neg_poss=neg_poss+"Negative";
        console.log(neg_poss);
    }
    else if(number>=0){
        neg_poss=neg_poss+"Possitive";
        console.log(neg_poss);
    }
    else{
        neg_poss="Error Occures";
    }

    number=parseInt(number);

    if(number%2===0){
        odd_even=odd_even+"Even";
        console.log(odd_even);
    }
    else if(number%2!== 0){
        odd_even=odd_even+"Odd";
        console.log(odd_even);
    }
    else{
        odd_even="Error Occures"
    }


    $('#output1').text("You Enter: "+number);
    $('#output2').text(neg_poss);
    $('#output3').text("And "+odd_even+".");


}



// ----------------------------------Speel Checker-----------------------------------------


// -------------------------------Number to word---------------------
       // actual  conversion code starts here

       var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
       var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
       var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
           'nineteen'
       ]; 

       function convert_millions(num) {
           if (num >= 1000000) {
               return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
           } else {
               return convert_thousands(num);
           }
       }

       function convert_thousands(num) {
           if (num >= 1000) {
               return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
           } else {
               return convert_hundreds(num);
           }
       }

       function convert_hundreds(num) {
           if (num > 99) {
               return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
           } else {
               return convert_tens(num);
           }
       }

       function convert_tens(num) {
           if (num < 10) return ones[num];
           else if (num >= 10 && num < 20) return teens[num - 10];
           else {
               return tens[Math.floor(num / 10)] + " " + ones[num % 10];
           }
       }

       function convert(num) {
           if (num == 0) return "zero";
           else return convert_millions(num);
       }



       function convert_word(){
           var cases = converter_form_word.number.value;
           var word_case=convert(cases);
           $('#output1').text("You Enter: "+cases);
           $('#output2').text("In word: "+word_case);
            //  for (var i = 0; i < cases.length; i++) {

            // //    console.log(cases[i] + ": " + convert(cases[i]));

            //  }
        //    console.log(convert(cases));
       }