/*var n = 7
var angle = 180 - ((n - 2) * 180 / n)
var length = 159
var i = 0
while(i < n) {
    i++
    forward(length)
    right(angle)
}*/
var square = function() {
  var len = 50
  var n = 4
  var angle = 90

  //循环开始
  var i = 0
  while(i < n) {
    i++
    forward(len)
    right(angle)
  }
}

//使用函数
square()
forward(20)
var squ = square
squ()

right(270)
forward(200)
right(90)

squ()
