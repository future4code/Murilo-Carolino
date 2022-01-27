//Exercício 1
//a.
function printInteger(n) {
    if (n >= 0) {
        printInteger(n - 1);
        console.log(n);
    }
}
console.log("Exercício 1, letra a.");
printInteger(5);
//b.
function printIntegerb(n) {
    if (n >= 0) {
        console.log(n);
        printIntegerb(n - 1);
    }
}
console.log("Exercício 1, letra b.");
printIntegerb(5);
//Exercício 2
function integerSum(n, sum = 0) {
    if (n === 0) {
        return sum;
    }
    return integerSum(n - 1, n + sum);
}
console.log("Exercício 2:");
console.log(integerSum(5));
//Exercício 3
function integerSumIterative(n) {
    let sum = n;
    for (let i = 0; i < n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("Exercício 3:");
console.log(integerSumIterative(5));
//Exercício 4
function printArray(array, i = array.length - 1) {
    if (i >= 0) {
        printArray(array, i - 1);
        console.log(`O elemento ${i} é:`, array[i]);
    }
}
console.log("Exercício 4:");
printArray([20, 50, 5, 4, 10]);
