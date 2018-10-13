var mom = {name: "Ani"};
var dad = {name: "Sipho", spouse: mom};
mom.spouse = dad;
document.write(mom.spouse.spouse.spouse.spouse);
var a = [1, 2, 3, 4];
a.unshift(a.pop());
alert(a);