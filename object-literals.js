var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    },
}

person.greet();
person['greet']();
console.log(person.firstName, person.lastName);
console.log(person['firstName'], person['lastName']);
