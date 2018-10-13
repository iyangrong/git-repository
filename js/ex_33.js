/*var SMALLEST = 2;
var BIGGEST = 9E15;
var n = prompt("Enter a number and I'll check if it is prime");
if (isNaN(n) || n < SMALLEST || n > BIGGEST || n % 1 !== 0) {
    alert("I can only test integers between " + SMALLEST + " and " + BIGGEST);
} else {
    var foundDivisor = false;
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
        if (n % k === 0) {
            foundDivisor = true;
            break;
        }
    }
    alert(n + " is " + (foundDivisor ? "not " : "") + "prime");
}*/
/*try {
    alert("Welcome to my script");
    throw "Ha Ha Ha";
    alert("You will never see this message");
} catch (e) {
    alert("Caught : " + e);
}*/
/*try {
    var PRIZES = ["a new car", "a broken stapler", "a refrigerator"];
    var door = prompt("Choose a door number (1, 2, or 3)");
    var prize = PRIZES[door - 1];
    alert("You have won " + prize.toUpperCase() + "!!");
} catch (e) {
    alert("Sorry, no such door.");
}*/
/*var PRIZES = ["a new car", "a broken stapler", "a refrigerator"];
var door = +prompt("Choose a door number (1, 2, or 3)");
if (door < 1 || door > 3) {
    alert("Sorry, no such door.");
}
else {
    var prize = PRIZES[door - 1];
    alert("You have won " + prize.toUpperCase() + "!!");
}*/
/*var die1, die2 = Math.floor(Math.random() * 6) + 1;
alert(die1);
alert(die2);*/
/*prompt("Hi, how are you today?");
alert("Gee, that's great!");*/
/*s = "Kunjalo!";
alert(s.toUpperCase());
alert(s);*/
/*var n = 9876543219876543.25;
if (n % 1 === 0) {
    alert("n是整数");
} else {
    alert("n不是整数");
}*/
/*if (Math.floor(n) === Math.ceil(n)) {
    alert("n是整数");
} else {
    alert("n不是整数");
}*/
/*var present = false;
var notice = "She is" + present ? "" : "n't" + " here.";
alert(notice);*/
/*var level = +prompt("Enter your prize level, 1-3");
var PRIZES = ["car", "ski vacation", "backpack", "certification"];
var prizes = [];
switch (level) {
    case 3: prizes.push(PRIZES.slice(0)); break;
    case 2: prizes.push(PRIZES.slice(1)); break;
    case 1: prizes.push(PRIZES.slice(2)); break;
    default: prizes.push(PRIZES.slice(3)); break;
}
alert(prizes);*/
/*var favoriteColor;
var garageColor;
var carColor = favoriteColor || garageColor || "red";
alert(carColor);*/
/*var s = prompt("Enter a string:");
var num = s.split(" ");
for (var i = 0; i < num.length; i += 1) {
    num[i] = Number(num[i]);
}
var min = num[0];
var max = num[0];
var sum = 0;
for (var i = 0; i < num.length; i += 1) {
    sum = sum + num[i];
    if (num[i] < min) {
        min = num[i];
    }
    if (num[i] > max) {
        max = num[i];
    }
}
document.write("Minimum is " + min + ", Maximum is " + max + ", Sum is " + sum + ".");*/
/*var a = prompt("Enter a string:");
for (; a !== " ";) {
    var arr = a.split("");
    var b = Math.floor(Math.random() * a.length);
    while(arr[b] === " ") {
        var b = Math.floor(Math.random() * a.length);
    }
    alert(arr[b]);
    a = prompt("Enter a string:");
}*/
/*var str = prompt("Enter a string:");
var arr = str.split("");
var str_1 = new Array();
for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] <= "A" && arr[i] >= "Z" || arr[i] <= "a" && arr[i] >= "z") {
        arr[i] = arr[i].toLowerCase();
        str_1.unshift(arr[i]);
    }
}
for (var i = 0, j = str_1.length - 1; i < j; i += 1, j -= 1) {
    if (str_1[i] !== str_1[j]) {
        break;
    }
}
if (i < j) {
    alert("不是回文。");
} else {
    alert("是回文。");
}*/
var smallest = 1;
var biggest = 10000;
var a = prompt("Enter a integer:");
document.write(a);
if (isNaN(a) || a < smallest || a > biggest || a % 1 !== 0) {
    alert("不是一个在范围内的整数。");
} else {
    a = Number(a);
    var n = 0;
    for (; a !== 1;){
        if (a % 2 === 0) {
            a = a / 2;
            document.write(" -> " + a);
            n = n + 1;
        } else {
            a = 3 * a + 1;
            document.write(" -> " + a);
            n = n + 1;
        }
    }
    alert(n);
}