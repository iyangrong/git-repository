var report = function(number_1, number_2){
    number_3 = Number(number_1) + Number(number_2);
    document.getElementById("result").innerHTML = number_1 + " + " + number_2 + " = " + number_3;
};
document.getElementById("add").onclick = function(){
    var str_1 = document.getElementById("number_1").innerHTML;
    var number_1 = str_1.replace(/[^0-9]/ig,"");
    var str_2 = document.getElementById("number_2").innerHTML;
    var number_2 = str_2.replace(/[^0-9]/ig,"");
    report(number_1, number_2);
};