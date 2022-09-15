function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);