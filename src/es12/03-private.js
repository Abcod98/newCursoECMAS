class user {
  //constructor
  constructor(name, age){
    this.name = name,
    this.age = age
  }
  // metodos
  #speak() {
    return 'Hello';
  }
  greeting () {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const dev1 = new user('Usuario', 15);
console.log(dev1.uAge);
console.log(dev1.uAge = 25);