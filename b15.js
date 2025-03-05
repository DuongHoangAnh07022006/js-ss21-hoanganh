let tien = parseInt(prompt("Nhập số tiền cần rút (chia hết cho 1000):"));
if (tien % 1000 !== 0 || tien <= 0) {
    console.log("Số tiền không hợp lệ!");
    alert("Số tiền không hợp lệ!");
} else {
    let menhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    console.log(`Số tiền rút: ${tien.toLocaleString()} VND`);
    alert(`Số tiền rút: ${tien.toLocaleString()} VND`);
    for (let mg of menhGia) {
        let soTo = Math.floor(tien / mg);
        if (soTo > 0) {
            console.log(`${mg.toLocaleString()} - ${soTo} tờ`);
            alert(`${mg.toLocaleString()} - ${soTo} tờ`);
            tien -= soTo * mg;
        }
    }
}
