interface Person {
  firstname: string,
  lastname: string
}
function sayHello (person: Person) {
  return 'hello, ' + person.firstname + person.lastname
}
let user = {
  firstname: 'link',
  lastname: 'chen'
}

console.log(sayHello(user));
