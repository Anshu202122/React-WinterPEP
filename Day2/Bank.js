// Simulate basic banking operations such as creating an account, depositing money and withdrawing money using JavaScript functions
const id = Math.random() * 10000000;
let balance = 0;
function createAccount(name, age, address, accountType) {
    if (age <= 18) {
        console.log('You are not eligible to open a bank account');
    }
    else {
        console.log(`Congratulations ${name}, you have successfully created a ${accountType} account`);
        console.log(`Your account number is ${id}`);
        console.log(`Your initial balance is ${balance}`);
    }
}
function depositeMoney(id, name, accountType, money) {
    balance += money;
    console.log(`${money} rs deposited in your account`);
    console.log(`Your current balance is ${balance}`);
}
function withdrawMoney(id, name, accountType, money) {
    balance -= money;
    console.log(`${money} rs debited from your account`);
    console.log(`Your current balance is ${balance}`);
}
createAccount('Ria', 20, 'Delhi', 'saving');
depositeMoney(id, 'Ria', 'saving', 5000);
withdrawMoney(id, 'Ria', 'saving', 500);