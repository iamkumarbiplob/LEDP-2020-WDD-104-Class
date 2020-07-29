
function converttof_f() {
    var celcious = converter_form_c_f.celcious.value;
    celcious = parseFloat(celcious);

    var fahrenheight = (celcious * (9 / 5)) + 32;

    converter_form_c_f.celcious.value = celcious + " °C";
    converter_form_c_f.fahrenheight.value = fahrenheight + " °F";
}

function converttof_c() {
    var fahrenheight = converter_form_f_c.fahrenheight.value;
    fahrenheight = parseFloat(fahrenheight);

    var celcious = (fahrenheight - 32) * (5 / 9);


    converter_form_f_c.celcious.value = celcious + " °C";
    converter_form_f_c.fahrenheight.value = fahrenheight + " °F";

}
