#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold.bgYellow(`My FIRST CURRENCY CONVERTER PROJECT`));
let currencyValue = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Converting from",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "Your Amount to convert"
    }
]);
console.log(chalk.bgGreenBright.bold(currencyValue[ans.to] / currencyValue[ans.from] * ans.amount));
