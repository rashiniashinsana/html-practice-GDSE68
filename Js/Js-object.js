let student ={}
console.log('Student : ' , typeof student)
console.log('Type of student : ', typeof student)

student = {
    firstName: 'Kamal',
    lastName: 'Perera',
    email: 'kamalperera@gmail.com',
    phoneNumber: '0778774457',
    age: 21,
    isRegistered: true

}

console.log('Student: ' , student)
console.log("Student Email (Using dot notation): ", student.email)
console.log("Student Email (Using square brackets notation): ", student ['email'])

//assigning values using dot notation
student.age = 20;
console.log('Student age : ', student.age )
console.log("Student : ", student)
