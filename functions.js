function hello1(){
  console.log('world!')
}
hello1()

function hello2(name) {
  console.log(`Hello ${ name }`);
}

hello2("Raphael");

function hello3(name, country  = 'Ghana') {
  console.log(`Hello ${ name } from ${ country }`);
}

hello3(`ralph`);


function printDetails(person) {
  const age = (person.age ? person.age : 0);//if (person.age === person.age){}
  const country = (person.country ? person.country : 'Ghana');//returns truthy thus Ghana

  console.log(`Hello ${ person.name } from ${ country } with age ${ age } years`);
}

printDetails({ name: 'Raphael', age: '24' });

// Using return keyword
function printDetails1(person) {
  const age = (person.age ? person.age : 0)
  const country = (person.country ? person.country : 'Ghana')

  return `Hello ${ person.name } from ${ country } with age ${ age } years`;
  //after a return statement nothing is added
}

const message = printDetails1({ name: 'Raphael', age: '24' });
console.log(message)

//guard clausing
function printDetails(person) {
  if (!person.name) { return 'you forgot the name' }

  const age = (person.age ? person.age : 0)
  const country = (person.country ? person.country : 'Ghana')

  return `Hello ${ person.name } from ${ country } with age ${ age } years`;
  console.log('You made it here boss!!!')
}

const message = printDetails({ age: '29' });
console.log(message)
