//finds largest prime factor of number for Project Euler Problem 3
var largestPrimeFactor = function(input) {

var a = input;
var b = 2;
var c;

while (a != 1) {
    if ( a%b === 0) {
        a = a/b;
        c = b;
        b = 2;
    }
    else {
        b+=1;
    }
}

return c;
};

largestPrimeFactor(600851475143);