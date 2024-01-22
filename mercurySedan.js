//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

console.log(v.make);

//After you write the derived Car class, you should test it out.
let a28MercurySedan = new VehicleModule.Car("Mercury", "Sedan", "1965", "blue", 3001, 5, 0, 4, 160, 10);

console.log(a28MercurySedan.make);
console.log(a28MercurySedan.model);
console.log(a28MercurySedan.year);
console.log(a28MercurySedan.color);
console.log(a28MercurySedan.mileage);
console.log(a28MercurySedan.maximumPassengers);
console.log(a28MercurySedan.passengers);
console.log(a28MercurySedan.numberOfWheels);
console.log(a28MercurySedan.maximumSpeed);
console.log(a28MercurySedan.fuel);

a28MercurySedan.start();
a28MercurySedan.loadPassenger();
a28MercurySedan.scheduleService();
//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
