function sum(num1, num2){
    return num1+num2;    
}

var result = sum(100,200);

// console.log('Result '+ result)

function bonuscalc(name,sal,bonuspercent){
    bonusamount = sal * bonuspercent / 100;
    // console.log('Bonus amount for '+name+' is '+bonusamount) 
}



bonuscalc('Sam', 25000, 6);

// outer variable
let userName = 'Sam';

function displaymsg(){
    let message = 'hi, '+userName;
    // console.log(message)
//    return message;
}

displaymsg()

// Default value
function mul(num1,num2=1){
    return num1*num2
}

let output = mul(200,100)
// console.log(output)


let newoutput = mul(200)
//console.log(newoutput)

// Default value
function mul(num1){
    function newmul(num2){
        return num1*num2
    }
}

let noutput = mul(200,100)
// console.log(noutput)

let res = (num1,num2) => {
    return num1+num2;
}

console.log(res(100,200))


let welcomemsg = () => {
    console.log('welcome to javascript functions')
}

welcomemsg();


welcomemsg = (city) => {
    return 'welcome to '+city;
}

console.log(welcomemsg('Mumbai'));

