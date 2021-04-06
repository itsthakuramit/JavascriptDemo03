
var person = {
    firstname: "Boris",
    lastname: "Becker"
}


console.log('Firstname : '+ person.firstname)
console.log('Lastname : '+ person.lastname)


person.city = 'Berlin';
console.log(person)


console.log(person['city'])


person.isTennisPlayer = function(){
    return true;
}

console.log(person.isTennisPlayer())