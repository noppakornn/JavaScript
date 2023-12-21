// removeDups([1, 0, 1, 0]) = (1, 0)
// removeDups(["The", "big", "cat"]) = ("The", "big", "cat")
// removeDups(["John", "Taylor", "John"]) = ("John", "Taylor")


var names = [1, 0, 1, 0]
var index = names.reduce(function(a,b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
},[]);

console.log(index)

var names = ["The", "big", "cat"]
var index = names.reduce(function(a,b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
},[]);

console.log(index)

var names = ["John", "Taylor", "John"]
var index = names.reduce(function(a,b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
},[]);

console.log(index)