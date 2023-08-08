let a = Number(prompt('put your number'))
let b = Number(prompt('put your number'))
let c = a+b

if (isNaN(a) || isNaN(b))  {
    alert('Invalid number')

} else {
    alert(c)
}