//What is typescript
// => Type script is a superset of javascript and it helps us write types for javascript
// Advantages of typescript
// => Avoid bugs in development
// => Incerease in development speed
// => Additional Features like enums and interfaces
// => It gives us suggestion when making bugs
console.log("Hello World!");
// Types
var firstName = "Punit";
var age = 20;
var isEmployed = true;
var functionDescribePerson = function (verified) {
    return "".concat(firstName, " is  verified : ").concat(verified);
};
console.log(functionDescribePerson(true));
function getTotal(numbers) {
    return numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
}
console.log(getTotal([20, 25, 66, 234, 12, 31, 14, 154]));
var user = {
    firstName: "Punit",
    lastName: "Bathija",
    isEmployed: true,
    companyName: "HDFC Ergo"
};
console.log(user);
function userData(userDetails) {
    return userDetails;
}
console.log(userData(user));
var TransactionType;
(function (TransactionType) {
    TransactionType["Debit"] = "Debit";
    TransactionType["Credit"] = "Credit";
})(TransactionType || (TransactionType = {}));
var transaction1 = {
    payerAccountNumber: 456,
    payeeAccountNumber: 123,
    isSuccessfull: true,
    transactionType: TransactionType.Credit,
    amount: 2000
};
var transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 107,
    isSuccessfull: true,
    transactionType: TransactionType.Debit,
    amount: 1000
};
var bankAccount1 = {
    accountNumber: 123,
    accountHoldersName: "Punit Bathija",
    balance: 20000,
    isActive: true,
    transactions: [transaction1, transaction2]
};
console.log(bankAccount1);
var Format;
(function (Format) {
    Format["pdf"] = "PDF";
    Format["epub"] = "E-PUB";
})(Format || (Format = {}));
var book1 = {
    name: "Atomic Habits",
    author: "Mark Manson",
    readBy: "James Clear",
    pages: 245,
    price: 190,
    duration: 2,
    publication: "penguin publishers"
};
var book2 = {
    name: "Atomic Habits",
    author: "Mark Manson",
    pages: 245,
    price: 190,
    fileSize: "320kb",
    format: Format.epub,
    publication: "penguin publishers"
};
var book3 = {
    name: "Atomic Habits",
    author: "Mark Manson",
    pages: 245,
    price: 190,
    publication: "penguin publishers"
};
console.log(book1, book2, book3);
// If you want to declare primitives values use type
// if you want to declare objects use interfaces
