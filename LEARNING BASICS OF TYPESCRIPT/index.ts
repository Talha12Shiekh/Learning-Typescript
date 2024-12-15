let fullName: string /*(type annotation)*/ = "Talha Khurram";

// fullName = 5 // can not do that

let num: number;
num = 1;

const names: string[] = [];


names.push("string");


function sum(a: number, b: number): number {
    return a + b;
}


// tuples

let address: [number, string, number];
address = [1, "", 2];


let person: { name: string };

person = { name: "Talha shiekh" };

let anotherPerson: { name: string, age?: number };

anotherPerson = { name: "Talha shiekh", age: 15 };


function addNums(a: string, b?: string) {
    return b ? a + b : a;
}

console.log(addNums('1'));


interface Person {
    name: string;
    age: number;
    id?: number;
}

let p: Person;

p = { name: "", age: 30, id: 1 }


interface Student {
    name: string;
    age: number;
    rollNum: number;
}

let p1: Person | Student;

p1 = { name: "Talha", age: 18, rollNum: 938, id: 15 }


let p2: Person & Student;

p2 = { name: "Talha", age: 18, id: 938,rollNum:938 }


// Type alias

type Count = string | number;
let c : Count;

c = 1;
c = "string";
// c = false; can not do it

type X = string & number; // never ( because a single variable can not be both string and number )

const n:[] = [];

// n.push("hi") // never


class CarX {
    constructor(public brand){
        
    }

    getBrand(){
        console.log(this.brand);
    }
}



let c2 = new CarX("BMW");
c2.getBrand();
console.log(c2.brand);

class CarY {
    constructor(private brand){
        
    }

    getBrand(){
        console.log(this.brand);
    }
}

let c3 = new CarY("BMW");
c3.getBrand()
// console.log(c3.brand) // can not do it 


interface ICar1 {
    brand:string;
    model:string;
}
interface ICar2 {
    releaseYear:number
}


class CarC implements ICar1,ICar2 {
    constructor(public brand,public model,public releaseYear){

    }
}

// generics 

function gen<T>(a:T,b:T) : T[]{
    return [a,b];
}

console.log(gen<string>('1','2'))
console.log(gen<number>(1,2))
console.log(gen<Array<number>>([1],[2]))


function AddUser<T extends { id : string }>(user:T){
    return user.id;
}


function noRestricitions(a,b){
    return a+b;
}
