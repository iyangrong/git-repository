var report = function(kelvin, fahrenheit){
    document.getElementById("result").innerHTML = kelvin + "\xb0K = " + fahrenheit + "\xb0F";
};
document.getElementById("k_to_f").onclick = function(){
    var k = document.getElementById("temperature").value;
    report(k, k * (-457.87));
};
document.getElementById("f_to_k").onclick = function(){
    var f = document.getElementById("temperature").value;
    report(f / (-457.87), f);
};