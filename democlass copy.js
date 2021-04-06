
var person = {
    firstname: "Boris",
    lastname: "Becker",

    name: function(){
        return this.firstname+' '+this.lastname;
    }
    
}

// person.name = function(){
//     return person.firstname+' '+person.lastname;
// }

console.log(person.name())