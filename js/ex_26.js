 var song = {
    name: "Johnny Tarr",
    album: "Tree",
    songer: "Gaelic Storm"
};
var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
var staff = {
    name: "Mar\u00C9a",
    salary: 1000,
    date: "2008-01-05",
    director: null
};
var grandmother = {
    name: "Tuulia",
    children: ["Sipho"]
};

var mom = {
    name: "Ani",
    children: ["Aolani", "Hiro", "Xue"]
};

var dad = {
    name: "Sipho",
    mother: grandmother,
    spouse: mom,
    children: ["Aolani", "Hiro", "Xue"]
};

mom.spouce = dad;

var children_one = {
    name: "Aolani",
    mother: mom,
    father: dad
};

var children_two = Object.create(children_one);
children_two.name = "Hiro";