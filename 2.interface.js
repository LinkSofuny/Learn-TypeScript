function sayHello(person) {
    return 'hello, ' + person.firstname + person.lastname;
}
var user = {
    firstname: 'link',
    lastname: 'chen'
};
console.log(sayHello(user));
