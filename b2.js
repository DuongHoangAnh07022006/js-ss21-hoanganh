let evencount = 0;
let oddcount = 0;
let numbers = []; 
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`))
    numbers.push(input);
    if (input % 2 === 0) {
        evencount++;
    } else {
        oddcount++;
    }
}
console.log(`Số số chẵn: ${evencount}`);
alert(`Số số chẵn: ${evencount}`);
console.log(`Số số lẻ: ${oddcount}`);
alert(`Số số lẻ: ${oddcount}`);
