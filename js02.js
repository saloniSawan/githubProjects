a = 2;
b = 2;
c = a + b;
console.log(c);

a = 4;
b = 2;
c = a - b;
console.log(c);

a = 5;
b = 7;
c = a * b;
console.log(c);

a = 9;
b = 3;
c = a / b;
console.log(c);

a = 25;
b = 2;
c = a % b

console.log(c);

a = 40;
b = 3;
a += b;

a = 10;
b = 3;
a -= b;

function compare(a, b) {
    if (a < b) {
        console.log("b is winn ");


    } else if (b > a) {
        console.log("a is winn");

    } else {
        console.log("equal");

    }
}
compare(4, 7);

function compareNum(a, b) {
    if (a < - b) {
        console.log("b is winn ");


    } else if (b > - a) {
        console.log("a is loss");

    } else {
        console.log("equal");

    }
}
compareNum(50, 99);

function numNUM(a, b) {
    // if (a == b) {
    //     console.log("a equal to b");

    // } else {
    //     console.log("not equal");

    // }
    if (a === b) {
        console.log("ek no.");

    } else {
        console.log("bakwas");

    }

}

numNUM(40, 66)

function combine(a, b) {
    if (a && b) {
        console.log("happy both are true");

    } else {
        console.log("not happy any one is wrong ");

    }
}
let g = true;
let h = true;
combine(a, b)

function combinee(a, b) {
    if (a || b) {
        console.log("happy one is true");

    } else {
        console.log("not happy both are true ");

    }
}
let gg = true;
let hh = true;
combinee(a, b)

function yesOrNot(condition) {
    if (!condition) {
        console.log("its is false");

    } else {
        console.log("it is true");

    }
}
let isRaining = false;
yesOrNot(isRaining);

function check(num) {
    const result = num >= 0 ? `num is negative` : `num is positive`;
    console.log(result);

}
const num = 9;
check(num);

