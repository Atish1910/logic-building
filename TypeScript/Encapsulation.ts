class bankAccount {
  private balance: number = 0;

  diposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  getBalance(): number {
    return this.balance;
  }
}
const acc = new bankAccount();
acc.diposit(1000);
acc.diposit(134);
acc.withdraw(76);
console.log(acc.getBalance());
