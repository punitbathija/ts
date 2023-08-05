//What is typescript
// => Type script is a superset of javascript and it helps us write types for javascript

// Advantages of typescript
// => Avoid bugs in development
// => Incerease in development speed
// => Additional Features like enums and interfaces
// => It gives us suggestion when making bugs

console.log("Hello World!");

// Types
let firstName: string = "Punit";
let age: number = 20;
let isEmployed: boolean = true;

let functionDescribePerson = (verified: boolean): string => {
  return `${firstName} is  verified : ${verified}`;
};

console.log(functionDescribePerson(true));

function getTotal(numbers: number[]): number {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(getTotal([20, 25, 66, 234, 12, 31, 14, 154]));

// Custom types
type User = {
  firstName: string;
  lastName: string;
  isEmployed: boolean;
  companyName?: string;
};

let user: User = {
  firstName: "Punit",
  lastName: "Bathija",
  isEmployed: true,
  companyName: "HDFC Ergo",
};

console.log(user);

function userData(userDetails: User): User {
  return userDetails;
}

console.log(userData(user));

// Interfaces

interface BanKAccount {
  accountNumber: number;
  accountHoldersName: string;
  balance: number;
  isActive: boolean;
  transactions: Transcation[];
}

enum TransactionType {
  Debit = "Debit",
  Credit = "Credit",
}

interface Transcation {
  payerAccountNumber: number;
  payeeAccountNumber: number;
  isSuccessfull: boolean;
  transactionType: TransactionType;
  amount: number;
}

const transaction1: Transcation = {
  payerAccountNumber: 456,
  payeeAccountNumber: 123,
  isSuccessfull: true,
  transactionType: TransactionType.Credit,
  amount: 2000,
};

const transaction2: Transcation = {
  payerAccountNumber: 123,
  payeeAccountNumber: 107,
  isSuccessfull: true,
  transactionType: TransactionType.Debit,
  amount: 1000,
};

const bankAccount1: BanKAccount = {
  accountNumber: 123,
  accountHoldersName: "Punit Bathija",
  balance: 20000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

console.log(bankAccount1);

// Extends with interfaces

interface Book {
  name: string;
  author: string;
  pages: number;
  price: number;
}

interface AudioBook extends Book {
  readBy: string;
  duration: number;
}

enum Format {
  pdf = "PDF",
  epub = "E-PUB",
}

interface EBook extends Book {
  format: Format;
  fileSize: string;
}

const book1: AudioBook = {
  name: "Atomic Habits",
  author: "Mark Manson",
  readBy: "James Clear",
  pages: 245,
  price: 190,
  duration: 2,
  publication: "penguin publishers",
};

const book2: EBook = {
  name: "Atomic Habits",
  author: "Mark Manson",
  pages: 245,
  price: 190,
  fileSize: "320kb",
  format: Format.epub,
  publication: "penguin publishers",
};

const book3: Book = {
  name: "Atomic Habits",
  author: "Mark Manson",
  pages: 245,
  price: 190,
  publication: "penguin publishers",
};

// Merge with interfaces

interface Book {
  publication: string;
}

console.log(book1, book2, book3);

// If you want to declare primitives values use type
// if you want to declare objects use interfaces
