let size = 7
console.log("a.");
for (let i = 1; i <= size; i++) {
    console.log("*".repeat(i));
}
console.log("\nb.");
for (let i = 1; i <= size; i++) {
    console.log("*".repeat(size - i + 1));
}
console.log("\nc.");
for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "*".repeat(i));
}
console.log("\nd.");
for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(i - 1) + "*".repeat(size - i + 1));
}
