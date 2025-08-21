function createAccount(name, city) {
    let balance = 0;

    return {
        deposit(amt) {
            balance += amt;
            return `Amount ${amt} added to the account`;
        },
        withdrawl(amt) {
            if (amt > balance) return "Insufficient Balance";

            balance -= amt;
            return `Amount ${amt} withdrawn from the account`;
        },
        printDetails() {
            
            console.log(`Hello ${name} from city: ${city}`)
            console.log(balance);
        }
    }
}


let newAccount = createAccount("Jai", "delhi");
console.log(newAccount.deposit(1000));
console.log(newAccount.withdrawl(100));
console.log(newAccount.withdrawl(100));
newAccount.deposit(10000000);
newAccount.printDetails();
