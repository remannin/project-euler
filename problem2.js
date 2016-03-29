//code to solve Project Euler problem 2

var fibOperator = function() {

var fibNumber1 = 0;
var fibNumber2 = 1;
var sum = 0;

while (fibNumber1 < 4000000) {
    if (fibNumber1%2 === 0) {
        sum += fibNumber1;
    }
    var fibNumber3 = fibNumber1 + fibNumber2;
    fibNumber1 = fibNumber2;
    fibNumber2 = fibNumber3;
}

return sum;
};

fibOperator();