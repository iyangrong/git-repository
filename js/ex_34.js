/*var cube = function(x) {
    return x * x * x;
};
alert(cube(-2));
alert(cube(10));
alert("在一个魔方中有" + (cube(3) -1) + "个立方体");*/
/*var diceRoll = function () {
    return 1 + Math.floor(6 * Math.random());
};
alert(diceRoll() + "\n"
     + diceRoll() + "\n"
     + diceRoll() + "\n"
     + diceRoll
);*/
/*var ave = function (x, y) {
    return (x + y) / 2;
}
alert(ave(3, 5));*/
/*
 *返回半径为r的圆的面积
 */
/*var circleArea = function (r) {
    return Math.PI * r * r;
};

/* 
 *
 */
/*
var divides = function (x, y) {
    return y % x === 0;
};

var discountedPrice = function (originalPrice, discountPercent) {
    return originalPrice - (originalPrice * discountPercent / 100.0);
};

var isLeapYear = function (y) {
    return divides(4, y) && !divides(100, y) || divides(400, y);
};

/*
 *计算出半径为r的圆的周长
 */
/*
var circleLength = function (r) {
    return 2 * PI * r;
};

/*
 *计算圆柱体的表面积
 */
/* 
var cirArea = function (r, h) {
    return 2 * PI * r * r +  2 * PI * r * h;
};*/

/* 
 *返回一个账户在t年之后的余额
 */
/*var balanceAfter = function (p, n, r, t) {
    return p * Math.pow(1 + (r / n), n * t);
};
alert(balanceAfter(1000, 12, 0.05, 10));
alert(balanceAfter(1, 1, 1, 20)); 
alert(balanceAfter(1000, 0, 0.05, 10));*/
/*
 *返回一个数组中所有元素之和
 */
/*var sum = function (a) {
    var result = 0
    for (var i = 0; i < a.length; i += 1) {
        result += a[i];
    }
    return result;
};
alert(sum([]));
alert(sum([10, -3, 8]));*/
/*var arr = function (b) {
    var result = [];
    for (var i = 0; i < b.length; i += 1) {
        result.push(b[i].toUpperCase());
    }
    return result;
};
var arra = function (b) {
    for (var i = 0; i < b.length; i += 1) {
        b[i] = b[i].toUpperCase();
    }
};
var b = [1, -4, 2];
alert(7);
alert(arr(b));
alert(7);
alert(b);
arra(b);
alert(b);
alert(7);*/
/*
 *返回n是否为质数。先决条件：n是一个大于或等于2的整数，在Javascript可表示的整数范围内
 */
/*
var isPrime = function (n) {
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
        if (n % k === 0) {
            return false;
        }
    }
    return true;
}
var smallest = 2; biggest = 9E15;
var n = prompt("输入一个数字，我会检查它是不是质数");
if (isNaN(n)) {
    alert("这不是个数字");
} else if (n < smallest) {
    alert("数字太小了")
} else if (n > biggest) {
    alert("数字太大了")
} else if (n % 1 !== 0) {
    alert("我只能检查整数")
} else {
    alert(n + "是" + (isPrime(n) ? "质数" : "合数"));
}*/
/*
 *返回一个数组，其中包含斐波那契数列数字。先觉条件：n介于0到75之间（含0、75）的整数。
 */
var fibonacciSequence = function (n) {

    //检测范围
    if (n < 0 || n > 75) {
        throw "这个数字超出范围";
    }

    var f = [];

    if (n === 1) {
        f.push(0);
    } else if (n === 2) {
        f.push(0);
        f.push(1);
    } else if (n > 2) {
        f.push(0);
        f.push(1);
        for (var i = 3; i <= n; i += 1) {
            f.push(f[f.length - 1] + f[f.length - 2]);
        }
    }

    return f;
};
var f = fibonacciSequence(0);
alert(f[f.length - 1]);