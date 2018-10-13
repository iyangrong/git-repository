/*var canvas = document.getElementById("squares");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
for (var side = 10; side <= 300; side += 10) {
    ctx.strokeRect(centerX - side / 2, centerY -side / 2, side, side);
}*/
/*var words = ["as", "far", "as", "i", "know"];
var result = "";
for(var i = 0; i < words.length; i += 1) {
    result += words[i].charAt(0).toUpperCase();
}
alert(result);*/
/*var a = [7, 3, 0, 0, 9, -5, 2, 1, 0, 1, 7];
var numberOfZeros = 0;
for (var i = 0, n = a.length; i < n; i += 1) {
    if (a[i] === 0) {
        numberOfZeros += 1;
    }
}
alert(numberOfZeros);*/
var LETTER_TO_NUMBER = {A: 2, B: 2, C: 2, D: 3, E: 3, F: 3, G: 4, H: 4, I: 4, J: 5, K: 5, L: 5, M: 6, N: 6, O: 6, P: 7, Q: 7, R: 7, S: 7, T: 8, U: 8, V: 8, W: 9, X: 9, Y: 9, Z: 9};
var phoneText = prompt("Enter a phone number (letters permitted)");
var result = "";
for (var i = 0; i < phoneText.length; i += 1) {
    var c = phoneText.charAt(i);
    if (/\d/.test(c)) {
        result += c;
    } else if (c in LETTER_TO_NUMBER) {
        result += LETTER_TO_NUMBER[c];
    }
}
alert("The phone number is:" + result);