
let sum = 0;
for (i=0; i < 5; i++) {
    let a = +prompt("Moi ban nhap vao 5 so nguyen:");
    if(a%2 !== 0){
        sum += a;
    }
}
alert(sum);