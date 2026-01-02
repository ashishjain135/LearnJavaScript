/** 
Problem Statement:
You are given an array of objects representing transactions made by
customers. Each object contains the following properties:
customerId: Number, representing the unique ID of the customer.
amount: Number, representing the amount of the transaction.
date: String, representing the date of the transaction (in the format
"YYYY-MM-DD").
Your task is to write a JavaScript function using functional
programming techniques that takes this array of transaction objects
and returns an object containing the following information:
totalTransactions: Total number of transactions.
totalAmount: Total amount of all transactions.
averageTransactionAmount: Average amount of transactions.
transactionsPerDay: An object where keys are dates and values are
arrays containing transactions made on that date.
transactionsByCustomer: An object where keys are customer IDs and
values are arrays containing transactions made by that customer.


*  INPUT
const transactions = [
{ customerId: 1, amount: 100, date: '2024-03-01' },
{ customerId: 2, amount: 150, date: '2024-03-01' },
{ customerId: 1, amount: 200, date: '2024-03-02' },
{ customerId: 3, amount: 50, date: '2024-03-02' },
{ customerId: 2, amount: 120, date: '2024-03-03' }
];


* OUTPUT
AverageTransactionAmount : 124
totalAmout : 620
totalTransaction : 5
transactionByCustomer:

transactionPerDay
*/


//Input 
const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-01' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' }
];

//step1 : Calculate the total number of transaction
const totalTransactions = transactions.length;

//step 2: Calculate the total amount of all Transaction
const TotalAmount = transactions.reduce((total,Transaction) =>total + Transaction.amount,0);
//console.log(TotalAmount); ->> 620

//step 3: Calculate the Average amount of transactions.
const averageTransactionAmount = TotalAmount/totalTransactions;
//console.log(averageTransactionAmount); -->> 124

//step 4 :Group transaction by date.
const transactionPerDay = transactions.reduce((acc, transaction) =>{
    if(!acc[transaction.date]){
        acc[transaction.date] = [];
    }
    acc[transaction.date].push(transaction);
    return acc;
},{});

//step 5 : Group transactions by customer
const transactionByCustomer = transactions.reduce((acc, transaction) =>{
    if(!acc[transaction.customerId]){
        acc[transaction.customerId] = [];
    }
    acc[transaction.customerId].push(transaction);
    return acc;
},{});

//step6: Combine all result into a single Object
const result = {
    totalTransactions,
    TotalAmount,
    averageTransactionAmount,
    transactionPerDay,
    transactionByCustomer
};

console.log(result);