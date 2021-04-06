
// creating Array object
let StudentArray = [
    {id:'s001',name:'Tom',email:'tom@gmail.com',marks:980,dept:'CSE'},
    {id:'s002',name:'Steve',email:'steve@gmail.com',marks:970,dept:'EEE'},
    {id:'s003',name:'mark',email:'mark@gmail.com',marks:990,dept:'ECE'},
    {id:'s004',name:'Greg',email:'greg@gmail.com',marks:920,dept:'CSE'}
]

// console.log(StudentArray)
// console.log(StudentArray.length)
// console.log(StudentArray[StudentArray.length-1].name.includes('Gregor'));

// iterate through each element
StudentArray.forEach( (student) => {
   // console.log(student.name.toUpperCase())
})

var newStudent =  {
    id:'s005',
    name:'Lewis',
    email:'lewis@gmail.com',
    marks:1020,
    dept:'EEE'
}

// // to add new object
StudentArray.push(newStudent);
// console.log(StudentArray.length)

// console.log(StudentArray[StudentArray.length-1].name);

// // to remove an object
// StudentArray.pop();
// console.log(StudentArray[StudentArray.length-1].name);

//StudentArray.shift();
// starts from index, number of elements
 StudentArray.splice(1,3)
 StudentArray.forEach( (student) => {
     console.log(student.name)
})

// let newArray = StudentArray.slice(1,3)
// newArray.forEach( (student) => {
//     console.log(student.name)
// })

// console.log(StudentArray.shift());


