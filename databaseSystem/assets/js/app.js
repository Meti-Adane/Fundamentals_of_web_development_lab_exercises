users =[]
let perosonalInformation ={
    phoneNumber : "",
    fname : "",
    lname : "",
    max_withdraw_amount : 5000.00,
    min_withdraw_amount : 100.00,
    min_balance_amount : 50.00,
    transactions: [],   
    current_balance : 0.0,
    username: this.fname+ this.phoneNumber,

    id: 
        function(){
            return (this.fname + this.fname +this.lname)           
        },
  
    new_account:
        function(fname, lname, phoneNumber, initialDeposit){
            this.fname = prompt("Enter your First name")
            this.lname = prompt ("Enter your last name");
            this.current_balance = parseFloat(prompt ("Enter the initial amount here"));
            console.log("Thank you for banking with us! your Account id is ", this.id())
            this.transactions.push("Account successfully created")
            users.push([this, this.id()])
        },
    balance: function(){
        console.log("Dear "+ this.fname + " Your current balance is: " + this.current_balance)
        return this.current_balance
    },
    deposit:
        function(amount){
            this.current_balance = this.current_balance + amount;
            console.log("Your account has been credited with", amount, "your current balance is :", this.current_balance)
            this.transactions.push("You deposited amount "+ amount +" to your account")
        },
    withdraw:
        function(amount){
            if (this.min_withdraw_amount > amount > this.max_withdraw_amount){ 
                console.log("You can only with draw", this.min_withdraw_amount, "upto", this.max_withdraw_amount, "at a time")
            }       
            if (amount > this.current_balance){
                console.log("Your account has insufficent amount for this transaction")
            }        
            this.current_balance = this.current_balance - amount;
            console.log("Your account has been debited with ", amount, " your current balance is :", this.current_balance)
            this.transactions.push("You have withdrawn amount " + amount + " from your account")
        },
    transfer: 
        function(amount, target_address, sender_address){
            if (amount > this.current_balance){
                console.log("Your account has insufficent amount for this transaction")
                return -999
            }        
            this.current_balance = this.current_balance - amount;
            console.log("Your transfered", amount, "your current balance is :", this.current_balance)
            this.transactions.push(("Your transfered "+ amount+ " your current balance is :", this.current_balance))  
        },
    view_transactions : 
        function(){
            if (this.transactions.length == 0) console.log("No transactions made so far :(") 
            this.transactions.forEach((transaction)=>{
                console.log(transaction)
            })
        },
    
}

var user = perosonalInformation

while (true){
    var service_no = prompt("Please choose service number from the list below: \n 1. Create new account\n 2. Deposit\n 3. Withdraw\n 4. Transfer\n 5. Balance\n 6. View transactions\n 0. Exit")
    if (service_no == 1){
        user.new_account();         
        continue
    }
        
    if (service_no == 2){let amount = parseFloat(prompt("Enter the amount you want to deposit"));user.deposit(amount); continue}
    if (service_no == 3){
        let amount = parseFloat(prompt("Enter the amount you want to withdraw"));
        user.withdraw(amount); this.
        continue
    }
    if (service_no == 4){
        let amount = parseFloat(prompt("Enter the amount you want to transfer"));
        user.transfer(amount, target_address);
        continue
    }
    if (service_no == 5){user.balance(); continue}
    if (service_no ==6){user.view_transactions(); continue}
    if (service_no == 0) break;
    }


