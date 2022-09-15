function newUser(name, age, country) {
  var name = name || 'Abraham';
  var age = age || 23;
  var country = country || 'GT';
  console.log(name,age,country);
}

newUser();
newUser('Job', 10,'AG');

function newAdmin(name = 'Abraham', age = 23, country = 'GT'){
  console.log(name,age,country);
}

newAdmin();
newAdmin('Oscar', 30, 'MX');