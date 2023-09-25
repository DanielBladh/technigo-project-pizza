// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let yourName = prompt("Please enter your name below:");
alert(`Nice to meet you, ${yourName}`);

// Step 2 - Food choice
let foodChoice = prompt(
  `What type of food would you like to order? \nEnter a number:\n1. Pizza\n2. Pasta\n3. Salad`
);
switch (foodChoice) {
  case "1":
    alert("You've chosen Pizza!");
    break;

  case "2":
    alert("You've chosen Pasta!");
    break;

  case "3":
    alert("You've chosen Salad!");
    break;
}

// Step 3 - Subtype choice
if (foodChoice === "1") {
  let pizzaChoice = prompt(
    `Select a Pizza type: \n Enter a number: \n1. Napolitana \n2. Hawaian \n3. Pepperoni`
  );
  switch (pizzaChoice) {
    case "1":
      alert("You've chosen Napolitana!");
      break;

    case "2":
      alert("You've chosen Hawaian!");
      break;

    case "3":
      alert("You've chosen Pepperoni!");
      break;

    default:
      alert("Invalid choice for pizza type. Please enter 1, 2, or 3.");
  }
} else if (foodChoice === "2") {
  let pastaChoice = prompt(
    `Select a Pasta type: \n Enter a number: \n1. Spaghetti Carbonara \n2. Fettuccine Alfredo \n3. Cheesy Tortellini`
  );
  switch (pastaChoice) {
    case "1":
      alert("You've chosen Spaghetti Carbonara!");
      break;

    case "2":
      alert("You've chosen Fettuccine Alfredo!");
      break;

    case "3":
      alert("You've chosen Cheesy Tortellini!");
      break;

    default:
      alert("Invalid choice for pasta type. Please enter 1, 2, or 3.");
  }
} else if (foodChoice === "3") {
  let saladChoice = prompt(
    `Select a Salad type: \n Enter a number: \n 1. Caesar Salad \n 2. Caprese Salad \n 3. Greek Salad`
  );
  switch (saladChoice) {
    case "1":
      alert("You've chosen Caesar Salad!");
      break;

    case "2":
      alert("You've chosen Caprese Salad!");
      break;

    case "3":
      alert("You've chosen Greek Salad!");
      break;

    default:
      alert("Invalid choice for pasta type. Please enter 1, 2, or 3.");
  }
}
// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
