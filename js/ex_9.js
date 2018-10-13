var report = function(meter, kilometer){
    document.getElementById("result").innerHTML = meter + "m = " + kilometer + "km";
};
document.getElementById("kilometer").onclick = function(){
    var f = document.getElementById("meter").value;
    report(f, f/1000);
};