//What is typescript
// => Type script is a superset of javascript and it helps us write types for javascript

// Advantages of typescript
// => Avoid bugs in development
// => Incerease in development speed
// => Additional Features like enums and interfaces
// => It gives us suggestion when making bugs

// Types
let firstName: string = "Punit";
let age: number = 20;
let isEmployed: boolean = true;

let functionDescribePerson = (verified: boolean): string => {
  return `${firstName} is  verified : ${verified}`;
};

console.log(functionDescribePerson(true));

function getTotal(numbers: number[]) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
