"use strict";
class bankAccount {
  balance = 0;
  diposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}
const acc = new bankAccount();
acc.diposit(1000);
acc.diposit(134);
acc.withdraw(76);
console.log(acc.getBalance());
