#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
);
console.log(chalk.bold.italic.green("\t\t WELCOME TO ") + chalk.bold("SID QUIZ System") + chalk.bold.italic.greenBright("\n"));
console.log(
  chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
);

console.log(chalk.bold.magenta("\tHow to play:"));
console.log("\tChoose one option for each question from dropdown");
console.log("\tTotal 6 questions");
console.log("\tGive at least 3 correct answers to win!\n");

let correct = 0;
let wrong = 0;

async function startQuiz() {
  const q1 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("What is the primary purpose of using baking powder in recipes?\n"),
      type: "list",
      choices: ["a) To add sweetness", "b)  To enhance flavor", "c)To help the dough rise ", "d) To thicken the batter"],
    },
  ]);

  if (q1.question === "c)To help the dough rise ") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q2 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("Which ingredient is commonly used to provide moisture in cake recipes?\n"),
      type: "list",
      choices: [
       " A Vinegar",
       " B) Milk",
        "C) Flour",
       "D) Salt"
      ],
    },
  ]);

  if (q2.question === "B) Milk") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q3 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("What is the main difference between baking soda and baking powder?\n"),
      type: "list",
      choices: [
       " A) Baking soda is acidic, while baking powder is not.",
       " B) Baking powder contains baking soda and an acid.",
        "C) Baking soda is used in bread, while baking powder is used in cakes.",
        "D) Baking powder is a leavening agent, while baking soda is a thickener."
      ],
    },
  ]);

  if (q3.question === "B) Baking powder contains baking soda and an acid.") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q4 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("When making cookies, what effect does chilling the dough have?\n"),
      type: "list",
      choices: [
        "A) It makes the cookies bake faster.",
"B) It helps the cookies spread less during baking.",
"C) It increases the sweetness of the cookies.",
"D) It makes the cookies softer."
      ],
    },
  ]);

  if (q4.question === " B) It helps the cookies spread less during baking.") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q5 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("In bread making, what role does kneading play?\n"),
      type: "list",
      choices: [
        "A) It adds flavor to the bread.",
"B) It helps develop gluten, giving the bread structure.",
"C) It helps the dough rise faster.",
"D) It adds sweetness to the bread."
      ],
    },
  ]);

  if (q5.question === "B) It helps develop gluten, giving the bread structure.") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  const q6 = await inquirer.prompt([
    {
      name: "question",
      message: chalk.yellow("What is the purpose of sifting flour before adding it to a recipe?\n"),
      type: "list",
      choices: [
        "A) To add air and prevent clumping",
"B) To increase the sugar content",
"C) To enhance the flavor",
"D) To make the flour more dense"
      ],
    },
  ]);

  if (q6.question === "A) To add air and prevent clumping") {
    correct++;
    console.log(chalk.bold.green("Correct"));
  } else {
    wrong++;
    console.log(chalk.bold.red("Wrong"));
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`));
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`));

  if (correct >= 3) {
    console.log(
      chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
    );
    console.log(chalk.bold.italic.green("\t\t CONGRATULATIONS! YOU WON!\n"));
    console.log(
      chalk.bold.yellow("\t﹑++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++\n")
    );
  } else {
    console.log(chalk.bold.red("\n\t OH NO! YOU LOOSE! TRY AGAIN"));
  }
}

startQuiz();