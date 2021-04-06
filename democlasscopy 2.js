// Creating Objects using functions

function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname
}

let person1 = new Person('Chris', 'Evert')

console.log('Person1 : '+ person1)
console.log('Firstname : '+ person1.firstname)
console.log('Lastname : '+ person1.lastname)


