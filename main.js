import inquirer from 'inquirer';
// class student {
//     static counter = 2000;
//     name: string;
//     id: number;
//     courses: string[];
//     balance: number;
//     constructor (name: string){
//         this.name = name;
//         this.id = student.counter++;
//         this.courses = [];
//         this.balance = 500;
//     }
//     enroll_course(course :string ){
//         this.courses.push(course);
//     }
//     view_balance (){
//         console.log (`Balance of ${this.name}: ${this.balance}`)
//     }
//     pay_fees(amount: number){
//         this.balance -= amount
//         console.log (`${this.name} has paid amount of ${amount}`);
//     }
//     show_status(){
//         console.log (`ID: ${this.id}`);
//         console.log (`Name: ${this.name}`);
//         console.log (`Courses: ${this.courses}`);
//         console.log (`Balance: ${this.balance}`);
//     }
// }
// class management {
//     students: student[]
//     constructor (){
//         this.students = []
//     }
//     add_student (name : string){
//         let Student = new student (name);
//         this.students.push(Student);
//         console.log (`Student: ${name} has got admission! Student ID: ${Student.id}`);
//     }
//     enroll_stud (student_id: number, course: string){
//        let stds = this.find_student(student_id);
//        if (student){
//         stds?.enroll_course(course);
//         console.log (`${stds?.name} has been enrolled in ${course}.`);
//        }
//     }
//     view_std_balance (student_id: number){
//         let studs = this.find_student(student_id);
//         if (studs){
//             studs.view_balance;
//         }
//         else {
//             console.log ("Student not found!");
//         }
//     }
//     stud_fees (student_id: number, amount: number){
//         let studnt = this.find_student(student_id);
//         if (studnt){
//             studnt.pay_fees(amount);
//         }
//         else{
//             console.log ("Student not found!");
//         }
//     }
// show_status (student_id: number){
//     let stdent =this.find_student(student_id);
// if (stdent){
//     stdent.show_status();
// }
// }
//     find_student(student_id: number){
//         return this.students.find(std => std.id === student_id);
//     }
// }; 
// // Main func to run the code
// async function main(){
//     console.log ("WELCOME TO MU5F1R - STUDENT MANAGEMENT SYSTEM!");
//     console.log ("-".repeat(50));
//     let stdmanage = new management();
//     while (true){
//         let choice = await inquirer.prompt([
//             {
//                 name : "choice",
//                 type : "list",
//                 message: "Select an option!",
//                 choices: [
//                     "Add student",
//                     "Enroll Student",
//                     "View Student balance",
//                     "Pay fees",
//                     "Show status",
//                     "Exit",
//                 ]
//             }
//         ]);
//        // using switch case
//        switch (choice.choice ){
//         case "Add student":
//           let nameInput = await inquirer.prompt([
//             {
//                 name : "name",
//                 type : "input",
//                 message: "Enter a stdent name"
//             }
//           ]);
//           management.a
//        }
//     }
// }
const randomNum = Math.floor(10000 + Math.random() * 90000);
let Balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter a student name!",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course you wish to be enrolled in!",
        choices: [
            "CyberSecurity",
            "Psychology",
            "Software Engineering",
            "Pharm D",
            "Social sciences",
        ]
    }
]);
const coursefees = {
    "CyberSecurity": 60000,
    "Psychology": 45000,
    "Software Engineering": 65000,
    "Pharm D": 70000,
    "Social sciences": 50000,
};
console.log(`The fees of this course per semester is ${coursefees[answer.courses]}`);
console.log(`Balance: ${Balance}`);
let paymentmethod = await inquirer.prompt([
    {
        name: "paymenttype",
        type: "list",
        message: "How would you like to pay your fees?",
        choices: ["EasyPaisa", "BankTransfer", "JazzCash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transferred Amount:",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "please enter a non-empty value!";
        }
    }
]);
console.log(`Payment has been paid through! ${paymentmethod.paymenttype}`);
let tuitionfees = coursefees[answer.courses];
let paymentamount = parseFloat(paymentmethod.amount);
if (tuitionfees === paymentamount) {
    console.log(`You've enrolled in the ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            choices: ['View status', 'Exit'],
            message: "What would you like to do next?",
        }
    ]);
    if (ans.select === "View status") {
        console.log(`student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNum}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Monthly Fees: ${paymentamount}`);
        console.log(`Balance: ${Balance += paymentamount}`);
    }
    else {
        console.log("Exiting the system!");
    }
}
else {
    console.log("Please pay the valid amount!");
}
