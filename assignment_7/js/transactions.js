"use strict";
var $ = function(id) {return document.getElementById(id);};

var Validate = function() {
    this.month = 0;
    this.year = 0;
};
Validate.prototype.isDate = function(text) {
    if ( ! /^[01]\d\/\d{4}$/.test(text) ) return false;
    var dateParts = text.split("/");
    this.month = parseInt(dateParts[0]);
    this.year = parseInt(dateParts[1]);
    if ( this.month < 1 || this.month > 12 ) return false;
    return true;
};
class Transaction {
    constructor(date, description, category, amount) {
    this.date = date;
    this.description = description;
    this.category = category;
    this.amount = amount;
}

} 

function getTransaction(){
console.log(transactions)
 return transactions;
}
var table = $("tbl");
var tBody = table.tBodies[0];
if (tBody == undifined){
    tBody = document.createElement("tbody");
    table.appendChild(tBody);
}
var row = tBody.insertRow(-5);

var textNode = document.createTextNode(transactions);

total.credit = "gas"+"decorations" + "shopping"+ "appliences" + "entertainment";
total.debit = "groceries" + "car" + "bills" + "insurance" + "health";

const credit = ["gas", "decorations", "shopping", "appliences", "entertainment"];
const debit = ["groceries", "car", "bills", "insurance", "health"];
amount = " ";

console.log(total.credit);
console.log(total.debit);
console.log(total.credit+total.debit);
console.log(total.credit+total.debit-amount);


window.onload = function(){
    $("transactions").onclick = transactions;
}

