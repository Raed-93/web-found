var a=3;
var b=5;
for (i = 1; i <= 100; i++) {
    if (i % a ==0 && i % b ==0) {
        console.log("fizzbuzz");
    }
    else if (i % b == 0) {
        console.log("buzz");

    }
    else if (i % a == 0) {
        console.log("fizz");

    }
    else {
        console.log(i);
    }

}
