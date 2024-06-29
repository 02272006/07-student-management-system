import inquirer from 'inquirer';


const randomNum : number = Math.floor (10000 + Math.random() * 90000);
let Balance = 0;
let answer = await inquirer.prompt(
    [
        {
            name : "students",
            type : "input",
            message : "Enter a student name!",
            validate : function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Please enter a non-empty value";
            }
        },
        {
            name : "courses",
            type : "list",
            message : "Select the course you wish to be enrolled in!",
            choices: [
                "CyberSecurity",
                "Psychology",
                "Software Engineering",
                "Pharm D",
                "Social sciences",
            ]
        }
    ]
)

const coursefees :{[key :string]: number} = {
    "CyberSecurity" : 60000,
     "Psychology" : 45000,
     "Software Engineering": 65000, 
     "Pharm D": 70000,
    "Social sciences" : 50000,
}
console.log (`The fees of this course per semester is ${coursefees[answer.courses]}`);
console.log (`Balance: ${Balance}`);

let paymentmethod = await inquirer.prompt([
    {
        name : "paymenttype",
        type : "list",
        message : "How would you like to pay your fees?",
        choices : ["EasyPaisa", "BankTransfer", "JazzCash"],
    },
    {
        name : "amount",
        type : "input",
        message : "Transferred Amount:",
        validate : function (value){
            if (value.trim !== ""){
                return true;
            }
            return "please enter a non-empty value!";
        }
    }
]);

console.log (`Payment has been paid through! ${paymentmethod.paymenttype}`);

let tuitionfees = coursefees[answer.courses]
let paymentamount = parseFloat(paymentmethod.amount)

if (tuitionfees === paymentamount){
    console.log(`You've enrolled in the ${answer.courses}`)
let ans = await inquirer.prompt([
    {
        name : "select",
        type : "list",
        choices : ['View status', 'Exit'],
        message: "What would you like to do next?",
    }
])    
if (ans.select === "View status"){
    console.log (`student Name: ${answer.students}`);
    console.log (`Student ID: ${randomNum}`);
    console.log (`Course: ${answer.courses}`);
    console.log (`Monthly Fees: ${paymentamount}`);
    console.log (`Balance: ${Balance += paymentamount}`);
}
else {
    console.log ("Exiting the system!")
}
} 
else {
    console.log ("Please pay the valid amount!");
}