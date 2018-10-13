/*var SIZE = 12;
document.write("<table border='1' cellspacing='0'>");
for (var i = 1; i <= SIZE; i += 1) {
    document.write("<br>");
    for (var i = 1; i <= SIZE; i += 1) {
        document.write("<td>" + (i * i) + "</td>");
    }
    document.write("<tr>");
}
document.write("</table>");*/
/*for (var i = 10; i >= 0; i -= 1) {
    document.write(i);
}*/
/*var mul = 1;
for (var i = 1; i <= 20; i += 1) {
    mul = mul * i;
}
document.write(mul);*/
var dog = {name: 'Lisichka', breed: 'G-SHEP', birthday: '2011-12-01'};
for (var p in dog) {
    document.write("The dog's " + p + " is " + dog[p] + "</br>");
}
/*var colors = ['red', 'amber', 'green'];
for (var c in colors) {
    alert(c);
}
delete colors.length;
document.write(colors.length);*/