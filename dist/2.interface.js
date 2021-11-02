function sayHello(person) {
    return 'hello, ' + person.firstname + person.lastname;
}
let user = {
    firstname: 'link',
    lastname: 'chen'
};
console.log(sayHello(user));
