// // Marks =[92, 73, 78, 100, 12, 38, 59, 62, -10]

// function CalculateGrade(){
//     let marks = 0;
//     if (marks >= 90) {
//       console.log("Grade A+");
//     } else if (marks >= 80) {
//       console.log("Grade A");
//     } else if (marks >= 75) {
//       console.log("Grade A-");
//     } else if (marks >= 65) {
//       console.log("Grade B");
//     } else if (marks >= 55) {
//       console.log("Grade C");
//     } else if (marks >= 45) {
//       console.log("Grade S");
//     } else if (marks < 35) {
//       console.log("Grade F");
//     } else if (marks <= 0) {
//       console.log("Invalid Marks");
//     }

// }

// function getStudentGrade(name,marks){
//     console.
// }


let StudentsArray =[
    {
        name: 'Rashini',
        marks: 92
    },
    {
        name: 'Amali',
        marks: 73
    },
    {
        name: 'Ruwi',
        marks: 78
    },
    {
        name: 'Sanduni',
        marks: 100
    },
    {
        name: 'Tashi',
        marks: 12
    },
    {
        name: 'Nimali',
        marks: 38
    },
    {
        name: 'Jyami',
        marks: 59
    },
    {
        name: 'Danuki',
        marks: 62
    },
    {
        name: 'Hima',
        marks: -10
    }
]


for(let i =0; i<StudentsArray.length; i++){
    console.log(getStudentGrade(i + ':' + StudentsArray[i].name, StudentsArray[i].marks)) }


function CalculateGrade(marks){
    if (marks >= 90 && marks <= 100){
        return 'A+'
    }else if (marks >= 80 && marks < 89){
        return 'A'
    }else if (marks >= 70 && marks < 79){
        return 'A-'
    }else if (marks >= 65 && marks < 69){
        return 'B'
    }else if (marks >= 55 && marks < 65){
        return 'C'
    }else if (marks >= 35 && marks < 55){
        return 'S'
    }else if (marks >= 0 && marks < 35 ){
        return 'F'
    }else{
        return 'Invalid Mark'
    }
}

function getStudentGrade (studentName,marks){
    return studentName + '\'s grade for ' + marks + ': ' + CalculateGrade(marks)

}