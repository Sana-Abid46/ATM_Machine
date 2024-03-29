#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 2044;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "cash options", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
    else if (operationAns.operation === "cash options") {
        let cashOptions = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "select the payment",
                choices: [5000, 10000, 20000, 30000, 40000, 50000],
            },
        ]);
        myBalance -= cashOptions.options;
        console.log(`Your remainig balance is ${myBalance}`);
    }
}
else {
    console.log("Wrong pin");
}
