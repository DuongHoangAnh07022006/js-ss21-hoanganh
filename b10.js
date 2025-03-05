let n = Number(prompt("Nhập một số nguyên n bất kỳ:"));
let count = 0; 
let number = 2;
let primeNumbers = [];
while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(number); 
        count++;
    }

    number++;
}
console.log(`Số nguyên tố đầu tiên (${n} số): ${primeNumbers.join(", ")}`);
alert(`Số nguyên tố đầu tiên (${n} số): ${primeNumbers.join(", ")}`);
