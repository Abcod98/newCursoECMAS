// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

// Object destructuring
let user = {
  username: 'Abraham', age: 23};
let {username, age} = user;
console.log(username, user.age);


// spread operator
let person = {name: 'Abraham', age: 23};
let country = 'GT';

let data = {id: 1, ...person, country}; // Con los 3 puntos (...) guardamos datos a un nuevo objeto
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 3, 2, 3);