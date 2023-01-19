// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const accountsWithWrongBalance = [];
  for (let account of array) {
    let sumOfWithdrawals = 0;
    let sumOfDeposits = 0;
    if (account.withdrawals != null) {
      for (const withdrawal of account.withdrawals) {
        sumOfWithdrawals = sumOfWithdrawals + withdrawal;
      }
    } else {
      sumOfWithdrawals = 0;
    }
    if (account.deposits != null) {
      for (const deposit of account.deposits) {
        sumOfDeposits = sumOfDeposits + deposit;
      }
    } else {
      sumOfDeposits = 0;
    }
    if (account.balance != sumOfDeposits - sumOfWithdrawals) {
      accountsWithWrongBalance.push(account);
    }
  }
  return accountsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
