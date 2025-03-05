let number = Number(prompt("Nhập một số nguyên bất kỳ:"));
let isPrime = true;
if (number <= 1) {
    isPrime = false; 
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            isPrime = false; 
            break; 
        }
    }
}
if (isPrime) {
    console.log(`${number} là số nguyên tố`);
    alert(`${number} là số nguyên tố`);
} else {
    console.log(`${number} không phải là số nguyên tố`);
    alert(`${number} không phải là số nguyên tố`);
}
