/* 0. Declare two variables `snackServings` and `guests` and assign them number values. */
let snackServings = 10;
let guests = 5;

/* 1. Print the sum of `snackServings` and `guests`. */
let sum = snackServings + guests;
console.log(`1. The sum of snack-servings and guests is: ${sum}`);

/* 2. Print the result of subtracting `guests` from `snackServings`. Then, print the result of subtracting `snackServings` from `guests`. */

let subtractingGuestsFromSackServings = snackServings - guests;

console.log(
  `2.a The result of subtracting guests from snackServings is : ${subtractingGuestsFromSackServings}`
);

let subtractingSackServingsFromGuests = guests - snackServings;
console.log(
  `2.b The result of subtracting snackServings from guests is : ${subtractingSackServingsFromGuests}`
);

/* 3. Multiply `snackServings` by `guests`. Print the result. */

let multiplySnackServingsByGuests = snackServings * guests;
console.log(
  `3. The multiplication result of snackServings and guests is: ${multiplySnackServingsByGuests}`
);

/* 4. Divide `snackServings` by `guests`. Print the result. */
let divideSnackServingsByGuests = snackServings / guests;

console.log(
  `4. The division result of snackServings and guests is: ${divideSnackServingsByGuests}`
);
/* 5. Declare another variable `drinks` with value `10`. Multiply `snackServings` and `guests`. Then, divide the result by `drinks`. Store the result in a new variable named `resultOne`. Print `resultOne` to the console. */
let drinks = 10;
multiplySnackServingsByGuests = snackServings * guests;
let resultOne = multiplySnackServingsByGuests / drinks;
console.log(`5. The result one is: ${resultOne}`);
/* 6. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas. Print the result. */
let monkeys = 15;
let bananas = 9;
let divideMonkeysByBananas = monkeys / bananas;
console.log(
  `6. The result of diving monkeys with bananas is: ${divideMonkeysByBananas}`
);

/* 7. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console. */

let monkeyFights = 20;
let addOfMonkeysAndBananas = monkeys + bananas;
let resultTwo = addOfMonkeysAndBananas * monkeyFights;
console.log(`7. The result two is: ${resultTwo}`);
/* 8. Create a variable named `monkeyBusiness` with value `90`. Increment `monkeyBusiness`. */
let monkeyBusiness = 90;
monkeyBusiness++;
console.log(`8. The increment in monkeyBusiness is:${monkeyBusiness} `);
/* 9. Create a variable named `boredom` with value `13` Decrement `boredom`. */
let boredom = 13;
boredom--;
console.log(`9. The decrement result is: ${boredom}`);
/* 10. Subtract bananas from monkeys and store this in a new variable "happiness". Add happiness and monkeyfights and print the result. */
let happiness = monkeys - bananas;
let addOfHappinessAndMonkeyFights = happiness + monkeyFights;
console.log(
  `10. The addition of happiness and monkeys fight is: ${addOfHappinessAndMonkeyFights}`
);
/* 11. Print the remainder when "resultOne" is divided by "resultTwo" to the console. */

let remainderOfResultOneDividedByResultTwo = resultOne % resultTwo;
console.log(
  `11. The remainder when result one is divided by result two is:${remainderOfResultOneDividedByResultTwo}`
);
