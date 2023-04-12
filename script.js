//complete this code
/*class Animal {}

class Dog extends Animal {}

class Cat extends Animal {}*/



class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this._species + " makes a sound.");
  }
}

class Cat extends Animal {
  purr() {
    console.log("The Siamese makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The Golden Retriever makes a sound");
  }
}
/*let myCat = new Cat("cat");
console.log(myCat.species); // Output: cat
myCat.makeSound(); // Output: The cat makes a sound.
myCat.purr(); // Output: purr

let myDog = new Dog("dog");
console.log(myDog.species); // Output: dog
myDog.makeSound(); // Output: The dog makes a sound.
myDog.bark(); // Output: woof*/

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
