let user = String(prompt('Username'));
let password = prompt('Password');

if (user == ' ') {
    alert('username is required')

}
else if (password = ' ') {
    alert('password is required')
}

else if (user == 'admin' || password == 1234) {
    alert('Hello' + user)

} else if (user == 'john' || password == 'qwerty') {

    alert('Hello', +user)

} else {
    alert('invalid username or password')
}

if (password = '') {
    alert('password is required')
}
