// Start here

// Step 1 - Welcome and introduction
let foodChoiceText = "";
let subtypeChoiceText = "";

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
    foodChoiceText = "Pizza";
    alert("You've chosen Pizza!");
    break;

  case "2":
    foodChoiceText = "Pasta";
    alert("You've chosen Pasta!");
    break;

  case "3":
    foodChoiceText = "Salad";
    alert("You've chosen Salad!");
    break;
}

// Step 3 - Subtype choice

let pizzaChoiceText = "";

if (foodChoice === "1") {
  let pizzaChoice = prompt(
    `Select a Pizza type: \n Enter a number: \n1. Napolitana \n2. Hawaian \n3. Pepperoni`
  );
  switch (pizzaChoice) {
    case "1":
      subtypeChoiceText = "Napolitana";
      alert("You've chosen Napolitana!");
      break;

    case "2":
      subtypeChoiceText = "Hawaian";
      alert("You've chosen Hawaian!");
      break;

    case "3":
      subtypeChoiceText = "Pepperoni";
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
      subtypeChoiceText = "Spaghetti Carbonara";
      alert("You've chosen Spaghetti Carbonara!");
      break;

    case "2":
      subtypeChoiceText = "Fettuccine Alfredo";
      alert("You've chosen Fettuccine Alfredo!");
      break;

    case "3":
      subtypeChoiceText = "Cheesy Tortellini";
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
      subtypeChoiceText = "Caesar Salad";
      alert("You've chosen Caesar Salad!");
      break;

    case "2":
      subtypeChoiceText = "Caprese Salad";
      alert("You've chosen Caprese Salad!");
      break;

    case "3":
      subtypeChoiceText = "Greek Salad";
      alert("You've chosen Greek Salad!");
      break;

    default:
      alert("Invalid choice for pasta type. Please enter 1, 2, or 3.");
  }
}
// Step 4 - Age
let userAge = prompt(
  `Is this food for a child or an adult? Please enter your age below:`
);
if (userAge <= 12) {
  let confirmation = prompt(
    `One child-sized ${foodChoiceText} (${subtypeChoiceText}) will be prepared for you. \nThat'll be 79kr. \n Please enter a number to confirm: \n1 - Yes \n2 - No`
  );

  if (confirmation === "1") {
    alert("Your order is confirmed. Thank you!");
  } else if (confirmation === "2") {
    alert("Your order is canceled.");
  } else {
    alert("Invalid choice. Please enter 1 to confirm or 2 to cancel.");
  }
} else {
  prompt(
    `One adult-sized ${foodChoiceText} (${subtypeChoiceText}) will be prepared for you. \nThat'll be 129kr. \n Please enter a number to confirm: \n1 - Yes \n2 - No`
  );
}

// Step 5 - Order confirmation
alert(
  "Thank you for your order! Your delicious meal will be prepared. See you soon!"
);
