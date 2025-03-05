let von = parseFloat(prompt("Nhập số tiền gửi ban đầu (VND):"));
let monthlyRate = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let months = parseInt(prompt("Nhập số tháng gửi:"));
if (isNaN(von) || isNaN(monthlyRate) || isNaN(months) || von <= 0 || monthlyRate <= 0 || months <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let totalAmount = von;
    for (let i = 0; i < months; i++) {
        totalAmount += totalAmount * monthlyRate;
    }
    let laiKiemDc = totalAmount - von;
    alert(`Số tiền lãi sau ${months} tháng: ${laiKiemDc.toFixed(2)} VND\nTổng số tiền nhận được: ${totalAmount.toFixed(2)} VND`);
}
