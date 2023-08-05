//What is typescript
// => Type script is a superset of javascript and it helps us write types for javascript

// Advantages of typescript
// => Avoid bugs in development
// => Incerease in development speed
// => Additional Features like enums and interfaces

// Types
let firstName: string = "Punit";
let age: number = 20;
let isEmployed: boolean = true;

let functionDescribePerson = (verified: boolean) => {
  console.log(`${firstName} is  verified : ${verified}`);
};

functionDescribePerson(true);
