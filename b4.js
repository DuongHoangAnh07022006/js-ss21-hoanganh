let repeat = true;
while (repeat) {
    let a = Number(prompt("Nhập a:"));
    let b = Number(prompt("Nhập b:"));
    let c = Number(prompt("Nhập c:"));
    if (a === 0) {
        alert("Không phải phương trình bậc 2");
    } else {
        let delta = b * b - 4 * a * c;
        if (delta > 0) {
            alert(`x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`);
        } else if (delta === 0) {
            alert(`x1 = x2 = ${-b / (2 * a)}`);
        } else {
            alert("Phương trình vô nghiệm");
        }
    }
    repeat = prompt("Bạn có muốn tính tiếp? (yes/no):").toLowerCase() === "yes";
}
alert("Chương trình đã kết thúc!");
