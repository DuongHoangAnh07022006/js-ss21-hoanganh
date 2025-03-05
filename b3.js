let password = 'An112233';
let input = prompt('Enter your password');
while (input !== password) {
    alert('Passwords do not match');
    input = prompt('Enter your password again');
}