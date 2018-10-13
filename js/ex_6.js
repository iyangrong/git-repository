var report = function(kilogram, pound){
    document.getElementById("result").innerHTML = kilogram + "Kg = " + pound + "Lb";
};
document.getElementById("kg_to_lb").onclick = function(){
    var kg = document.getElementById("weight").value;
    report(kg, 2.2046 * kg);
};
document.getElementById("lb_to_kg").onclick = function(){
    var lb = document.getElementById("weight").value;
    report(lb / 2.2046, lb);
}