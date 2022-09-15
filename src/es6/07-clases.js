// Declarando
class User {};
// Instancia de una clase
//const newUser = new User();

class user {
  // metodos
  greeting(){
    return 'Hello';
  }
};

const abcod = new user();
console.log(abcod.greeting());
const dev = new user();
console.log(dev.greeting());

// Constructor
class user {
  //Constructor
  constructor () {
    console.log('Nuevo Usuario');
  }
  greeting(){
    return 'Hello';
  }
}

const abraham = new user();

// this
class user {
  constructor(name) {
    this.name = name;
  }
  // Metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const nombre = new user('Nuevo Usuario');
console.log(nombre.greeting());

// setters and getters

class user {
  //constructor
  constructor(name, age){
    this.name = name,
    this.age = age
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting () {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const dev1 = new user('Usuario', 15);
console.log(dev1.uAge);
console.log(dev1.uAge = 25);