var p1 = {name: "Alice"};
var p2 = {name: "Bob", manager: p1};
p1.manager = p1;
alert(p2.manager.manager.manager.name);