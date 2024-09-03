function pertenceFibonacci(num){
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    if (num === a || num == b) return true;

    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === num;
}

let numero = 18;

if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}