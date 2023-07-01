class Vehicle {
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

myFirstVehicle
// {make: 'Honda', model: 'Monster Truck', year: 1999}


myFirstVehicle
// Vehicle {make: 'Honda', model: 'Monster Truck', year: 1999}
// 	1. make: "Honda"
// 	2. model: "Monster Truck"
// 	3. year: 1999
// 	4. [[Prototype]]: Object
// 		1. constructor: class Vehicle
// 		2. honk: ƒ honk()
// 		3. toString: ƒ toString()

myFirstVehicle.honk();
// "Beep."

myFirstVehicle.toString();
// "The vehicle is a Honda Monster Truck from 1999."



// Part II:

class Vehicle {
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}


class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005)

myFirstCar
// {make: 'Toyota', model: 'Corolla', year: 2005, numWheels: 4}
myFirstCar.toString()
// 'The vehicle is a Toyota Corolla from 2005'
myFirstCar.honk()
// 'Beep'
myFirstCar.numWheels
// 4
myFirstCar.make
// 'Toyota'
myFirstCar.model
// 'Corolla'
myFirstCar.year
// 2005


// Part III:
class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

const myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000)

myFirstMotorcycle
// {make: 'Honda', model: 'Nighthawk', year: 2000, numWheels: 2}
myFirstMotorcycle.toString()
// 'The vehicle is a Honda Nighthawk from 2000'
myFirstMotorcycle.honk()
// 'Beep'
myFirstMotorcycle.revEngine()
// 'VROOM!!!'
myFirstMotorcycle.numWheels
// 2


// Part Four:
/*
Create a class for a Garage. It should have a property called ***vehicles*** which will store 
an array of vehicles, and a property called *** capacity *** which is a number indicating how many 
vehicles will fit in the garage. When you create a garage, *** vehicles *** will always be empty; 
you only need to provide the *** capacity ***.

A garage should also have an ***add*** method, which attempts to add a vehicle to the array of vehicles. 
However, if you try to add something which is *not* a vehicle, the garage should return the message 
“Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”
*/

class Vehicle {
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(num) {
        this.vehicles = [];
        this.capacity = num;
    }
    add(vehicle) {
        if (garage instanceof Garage) {
            return "Only vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }

        this.vehicles.push(vehicle)
        return 'Vehicle added!'
    }
}

let garage = new Garage(2);

garage.vehicles;// []

garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"

garage.vehicles; // [Car]

garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"

garage.vehicles;
// [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."

garage instanceof Garage
//  true
