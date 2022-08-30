// const user = {
//     name: 'alonso',
//     lastname: 'reyes',
//     age: 30,
//     address: {
//         country: 'chile',
//         city: 'santiago',
//         street: 'vivo en santiago de chile'
//     },
//     friends: ['felipe', 'christian'],
//     active: true,
//     sendMail(){
//         return 'sending mail...'
//     }
// }

// console.log(user.address.country);
// console.log(user.friends)
// console.log(user.sendMail())

// const title = document.createElement('h1')
// title.innerText = 'Prueba de un H1'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function(){
//     title.innerText = 'Texto actualizado con JS'
//     alert('se realizo un click')
// })

// document.body.append(title)
// document.body.append(button)


// const user = {
//     name: 'joe',
//     age: 30
// }

// function printInfo(user){
//     const {name, age} = user;

//     console.log(name, age)
//     return '<h1>Hola ' + name + '</h1>'
// }

// document.body.innerHTML = printInfo(user)

const showText = () => 'Hola mundo'
const showNumber = () => 33
const showBoolean = () => true
const showArray = () => [1, 2, 3]
const showObject = () => ({name : 'alonso'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', () => {
    alert('Haz hecho un click')
})

document.body.append(button)