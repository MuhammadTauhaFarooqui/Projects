/*
JavaScript Classes are templates for javascript objects.
A javascript class is not an object.
It is a template for Javascript objects.
*/
class Car { //The example above creates a class named "Car".The class has two initial properties: 'name' and 'year'.
  //Always add a method named constructor
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

//When we have a class, we can use it to create objects.
// The example above uses the Car class to create two Car objects.
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById('demo').innerHTML = myCar1.name + " " + myCar2.name;

/*
The constructor method is called automatically when a new object is created.
The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

//Create a class method name "age" that returns the Car age.
class Car_replicate{
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  age(){
    const date = new Date();
    return date, date.getFullYear() - this.year;
    //return date.getFullYear() - this.year;
  }
}

myCar3 = new Car_replicate("Ford", 2014);
document.getElementById('demo').innerHTML = "My Car is: " + myCar3.age() + " years old.";  

//We can send Parameters to Class Methods.

class CAR {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  age(x){
    return(x - this.year);
  }
}

const date = new Date();
let year = date.getFullYear();
const mycar = new CAR("Ford", 2014);
document.getElementById('demo').innerHTML = "My car is " + mycar.age(year) + " years old";

class CAR3 {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  age(){
    const date = new Date();
    return (date.getFullYear() - this.year);
  }
}

document.getElementById('demo').innerHTML = "My car is " + new CAR3("HONDA", 2007).age() + " years old";

//Inheritance

class CarClassForInheritance{
  constructor(brand){
    this.carname = brand;
  }
  present(){
    return 'I have a ' + this.carname;
  }
}

class Model extends CarClassForInheritance {
  constructor(brand, mod){
    super(brand);
    this.model = mod;
  }
  
  show(){
    return this.present() + ", it is a " + this.model;
  }
}

let InheritanceCar1 = new Model("Ford", "Mustang");
document.getElementById('demo').innerHTML = InheritanceCar1.show();

//Getter and Setter Methods

class MYCAR{
  constructor(brand){
    this.carname = brand;
  }
  getcarname(){
    return this.carname;
  }
  setcarname(x){
    this.carname = x;
  }
}

const myCar = new MYCAR('Ford');
myCar.setcarname("Audi");
document.getElementById('demo').innerHTML = myCar.getcarname();

class CARCLASS{
  constructor(brand){
    this.carname = brand;
  }
  get cnam(){
    return this.carname;
  }
  set cnam(x){
    this.carname = x;
  }
}

let newcar = new CARCLASS("Ford");
document.getElementById('demo').innerHTML = newcar.cnam;

newcar.carname = "Volvo";
document.getElementById('demo').innerHTML = newcar.cnam;

//Unlike functions and other Javascript declarations, class declarations are not hoisted.

//Class cannot be used before get declared.

//Static Methods.

/*
Static methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.
If you want to use the class object inside a static method, passing as an parameter.
*/

class person{
  constructor(name){
    this.name = name;
  }
  static hello(PERSON){
    return "Hello!! " + PERSON.name;
  };  
}

const person1 = new person('John');

//you can call hello function on the Car class by using class reference.
document.getElementById('demo').innerHTML = person.hello(person1);




