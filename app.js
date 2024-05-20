// var prompt = require('prompt-sync')();
function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
       return this.currentValue = parseFloat(prompt('Enter number: ', 0)) + startingValue
    };
    this.show = function() {
       return this.currentValue
    };
}

let acc = new Accumulator(1);
acc.read()
// console.log(acc.show())
alert(acc.show())

