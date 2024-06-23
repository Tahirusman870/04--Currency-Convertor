import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "AED": 0.013,
        "SAR": 0.014,
        "USD": 0.0036,
        "EUR": 0.0034,
        "TRY": 0.12,
        "PKR": 1
    },
    "AED": {
        "PKR": 75.84,
        "SAR": 1.02,
        "USD": 0.27,
        "EUR": 0.25,
        "TRY": 8.94,
        "AED": 1
    },
    "SAR": {
        "PKR": 74.04,
        "AED": 0.98,
        "USD": 0.27,
        "EUR": 0.25,
        "TRY": 8.75,
        "SAR": 1
    },
    "USD": {
        "PKR": 277.91,
        "AED": 3.67,
        "SAR": 3.75,
        "EUR": 0.93,
        "TRY": 32.83,
        "USD": 1
    },
    "EUR": {
        "PKR": 297.16,
        "AED": 3.93,
        "SAR": 4.01,
        "USD": 1.07,
        "TRY": 35.10,
        "EUR": 1
    },
    "TRY": {
        "PKR": 8.47,
        "AED": 0.11,
        "SAR": 0.11,
        "USD": 0.030,
        "EUR": 0.028,
        "TRY": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EUR", "AED", "SAR", "TRY"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EUR", "AED", "SAR", "TRY"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
