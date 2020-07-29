
function convertgpa() {
    var name = converter_form.fname.value;
    var marks = converter_form.marks.value;
    var point = "Not given";
    var gpa = "Not Given";
    marks = parseInt(marks);

    if (marks >= 80 && marks <= 100) {
        gpa = "A+";
        point = "5.00";
        alert("Hurray, You got GPA 5.00");
    }
    else if (marks >= 70 && marks <= 79) {
        gpa = "A";
        point = "4.00";
    }
    else if (marks >= 60 && marks <= 69) {
        gpa = "A-";
        point = "3.5";
    }
    else if (marks >= 50 && marks <= 59) {
        gpa = "B";
        point = "3.00";
    }
    else if (marks >= 40 && marks <= 49) {
        gpa = "C";
        point = "2.00"
    }
    else if (marks >= 33 && marks <= 39) {
        gpa = "D";
        point = "1.00"
    }
    else if (marks >= 0 && marks <= 32) {
        gpa = "F";
        point = "0.00";
        alert("Sorry, You are Fail");
    }
    else if(marks>100 || marks<0){
        alert("You Enter The marks more then or less then 100.");
    }
    else {
        alert("Sorry, Somthing is Wrong");
    }
    converter_form.fname_out.value = name;
    converter_form.gpa_out.value = gpa;
    converter_form.point_out.value = point;
}