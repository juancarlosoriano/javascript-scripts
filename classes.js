/* Step One - Functional Instantiation

1.) Create an object using {} in a function call
2.) Set properties and methods in it
3.) Return object

============================================

function Animal(name, energy, greeting) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.greeting = greeting;

  animal.talk = function() {
    console.log(`${this.greeting}!`);
  };

  return animal;
}

const dog = Animal("Spot", 10, "Woof");
const cat = Animal("Mittens", 10, "Meow");

============================================

This is reusable code. The problem however is 
that each time an Animal is created, new functions are
created in memory in the talk method. Since this method
is shared amongst all Animal objects, we can store the
method in a single place in memory.

*/

/* Step Two -  Store Method in a Single Object

1.) Create an object that holds the functions
2.) Save the reference to the functions in
    the Animal object method

============================================

const animalMethods = {
  talk() {
    console.log(`${this.greeting}!`);
  }
};

function Animal(name, energy, greeting) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.greeting = greeting;
  animal.talk = animalMethods.talk;

  return animal;
}

const dog = Animal("Spot", 10, "Woof");

============================================

This makes the code memory efficient as the methods 
are only stored in memory once. However, we can improve
it further to delegate failed hookups.

*/

/* Step Three

1.) Use Object.create to create the object

============================================

const animalMethods = {
  talk() {
    console.log(`${this.greeting}!`);
  }
};

function Animal(name, energy, greeting) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  animal.greeting = greeting;

  return animal;
}

const dog = Animal("Spot", 10, "Woof");

============================================

The code now allows to call delegate failed calls
for dog.talk() instead of just assigning it 
manually in the functional instantiation. We can still
improve the code further by merging the two objects
instead of managing two objects: Animal and animalMethods

*/

/* Step Four - Prototypal Instantiation

1.) Create Animal object from its prototype
2.) Store methods in the prototype

============================================

function Animal(name, energy, greeting) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;
  animal.greeting = greeting;

  return animal;
}

Animal.prototype.talk = function() {
  console.log(`${this.greeting}!`);
};

const dog = Animal("Spot", 10, "Woof");
console.log(dog.__proto__);

============================================

Now we only have to manage one object and the
shared method calls are now stored in the Animal
prototype. We can make this code shorter by
eliminating the object creation and object
return.

*/

/* Step Five - Pseudoclassical Instantiation

1.) Remove Object.create and return lines from the code
2.) Use the new keyword to implicitly do the above for us
3.) The new keyword also gives us an internal 'this'
    object that refers to the object instance

============================================

function Animal(name, energy, greeting) {
  this.name = name;
  this.energy = energy;
  this.greeting = greeting;
}

Animal.prototype.talk = function() {
  console.log(`${this.greeting}!`);
};

const dog = new Animal("Spot", 10, "Woof");

============================================

This is more concise than the previous code. Also,
the function definition of the Animal is referred to
as the constructor of the object. Hence, it is 
called pseudoclassical. ES6 introduces a new syntactical
sugar to make this even simpler.
*/

/* Step Six - ES6 Class Object

1.) Use the ES6 'class' keyword
2.) Eliminate direct prototype assignment and
    move it inside the object declaration
3.) Use a constructor method to replace the
    constructor function declaration

============================================

class Animal {
  constructor(name, energy, greeting) {
    this.name = name;
    this.energy = energy;
    this.greeting = greeting;
  }
  talk() {
    console.log(`${this.greeting}!`);
  }
}

const dog = new Animal("Spot", 10, "Woof");

============================================

This approach is just a syntactical sugar over the
pseudoclassical approach. They are the same thing
but less verbose without explicitly accessing the
prototype of the object outside of the class
definition. We can go a few steps further and include
class-wide helper methods or static methods.

*/

/* Step Seven - ES6 Static Class Methods

1.) Use the static keyword in front of the method
    definition to make it a static class method
2.) Call static class methods through the class object
    rather than the object instance.

============================================

class Animal {
  constructor(name, energy, greeting) {
    this.name = name;
    this.energy = energy;
    this.greeting = greeting;
  }
  talk() {
    console.log(`${this.greeting}!`);
  }
  static sleep() {
    console.log("Zzzzz...");
  }
}

const dog = new Animal("Spot", 10, "Woof");
Animal.sleep();

============================================

The static class method acts as a helper function
that is associated with the object class that need
not be associated with an instance of the object.
Therefore, dog.sleep() will return an error.

*/

/* Step Eight - ES6 Class Inheritance

1.) Use the extends keyword to inherit from a class
2.) Call the super() method to call the superclass
    constructor when inheriting

============================================

*/

class Animal {
  constructor(name, energy, greeting) {
    this.name = name;
    this.energy = energy;
    this.greeting = greeting;
  }
  talk() {
    console.log(`${this.greeting}!`);
  }
  cry() {
    console.log("Boohoo!");
  }
  static sleep() {
    console.log("Zzzzz...");
  }
}

class Mammal extends Animal {
  constructor(name, energy, greeting, legs) {
    super(name, energy, greeting);
    this.legs = legs;
  }
}

const dog = new Mammal("Spot", 10, "Woof", 4);
dog.cry();
Mammal.sleep();

/*
============================================

When inheriting from a class object, we need to
call super() in the constructor method of the new
class in order to instantiate the class properties
that we are inheriting.

When constructing an inherited class, we can add new
and more specialized properties and methods.

When inheriting from a class, static class methods 
are also inherited i.e., Mammal.sleep().

*/

console.log({ ...dog });
