class Customer {

    constructor(id,name,email,contactno){
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactno = contactno;
    }

    getContactDetails(){
        return `email => ${this.email} and contactno => ${this.contactno}`
    }

}

let customer1 = new Customer('c001','Sam','sam@gmail.com','9876556789');
let customer2 = new Customer('c002','Chris','chris@gmail.com','9876555789')

console.log(customer1)

console.log(customer2)

console.log(customer2.getContactDetails())