// find the sum of multiples of 3 and 5 up to 1000 from Project Euler

var multiples3and5 = function() {

var sum = 0;
var i = 0;

while (i < 1000) {
if (i%15 === 0) {
    sum+=i;
} else {
    if (i%3 === 0 || i%5 === 0) {
        sum+=i;
    }
}
i++;
}
return sum;
};
multiples3and5();