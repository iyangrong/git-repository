var x = 42;
var y = -1;
var bothPositive = x > 0 && y > 0;
alert(bothPositive);
var atLeastOneNegative = x < 0 || y < 0;
alert(atLeastOneNegative);
var exactlyOneNegative = x < 0 !== y < 0;
alert(exactlyOneNegative);
var atLeastOneNonPositive = !bothPositive;
alert(atLeastOneNonPositive)