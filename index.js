// Write your solution in this file!
// helpers.js

// declare customerName to be bob in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // using var or let would set this in local scope, but since it's not specified in the test, let's keep it global
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer; // assuming bestCustomer is already declared somewhere else
}

const leastFavoriteCustomer = 'something'; // using const to define this, as the test seems to expect it to be constant

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // this will throw an error since leastFavoriteCustomer is a constant
}

// export functions and variables for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
