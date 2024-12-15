var fullName /*(type annotation)*/ = "Talha Khurram";
// fullName = 5 // can not do that
var num;
num = 1;
var names = [];
names.push("string");
function sum(a, b) {
    return a + b;
}
// tuples
var address;
address = [1, "", 2];
var person;
person = { name: "Talha shiekh" };
var anotherPerson;
anotherPerson = { name: "Talha shiekh", age: 15 };
function addNums(a, b) {
    return b ? a + b : a;
}
console.log(addNums('1'));
var p;
p = { name: "", age: 30, id: 1 };
var p1;
p1 = { name: "Talha", age: 18, rollNum: 938, id: 15 };
var p2;
p2 = { name: "Talha", age: 18, id: 938, rollNum: 938 };
var c;
c = 1;
c = "string";
var n = [];
// n.push("hi") // never
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX("BMW");
c2.getBrand();
console.log(c2.brand);
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY("BMW");
c3.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, model, releaseYear) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
    }
    return CarC;
}());
// generics 
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(1, 2));
console.log(gen([1], [2]));
