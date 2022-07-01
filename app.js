// Ejercicio 01

const botonImg = document.getElementById('desafio1img')

botonImg.addEventListener('click',function(agregarBorde){ 
    console.log('Hice click')
    desafio1img.classList.toggle("borde-rojo")
})


// Ejercicio 02

let botonVerificar = document.getElementById('boton-verificar')
botonVerificar.addEventListener("click", contarSticker())

function contarSticker(){
let contadorSticker01 = document.getElementById('sticker01')
let contadorSticker02 = document.getElementById('sticker02')
let contadorSticker03 = document.getElementById('sticker03')
    
console.log(contadorSticker01.value)
console.log(contadorSticker02.value)
console.log(contadorSticker03.value)

let sticker01 = parseInt(contadorSticker01.value)
let sticker02 = parseInt(contadorSticker02.value)
let sticker03 = parseInt(contadorSticker03.value)

let sumaSticker= sticker01 + sticker02 + sticker03

console.log(sumaSticker)

 let resultado = document.getElementById('resultado')

 if (sumaSticker <= 10) {
    resultado.innerHTML= 'Llevas ' + sumaSticker +  ' sticker' 

 } else if (sumaSticker >= 10) {
    resultado.innerHTML= 'Llevas demasiados sticker' 

 } else{ 
    resultado.innerHTML= 'No has elegido ningún sticker'
 }
}
   

// Ejercicio 03

let botonIngresar = document.getElementById('botonIngresar')
botonIngresar.addEventListener("click", mostrarClave())


function mostrarClave() {

let num1 = document.getElementById('lista1').value
let num2 = document.getElementById('lista2').value
let num3 = document.getElementById('lista3').value    

console.log(num1)
console.log(num2)
console.log(num3)

let claveDesafio = num1 + num2 + num3
console.log (claveDesafio)

let resultadoClave = document.getElementById('desafio3-resultado')

if (claveDesafio === '911') {
    resultadoClave.innerHTML= 'Password 1 es correcto' 

 } else if (claveDesafio === '714') {
    resultadoClave.innerHTML=  'Password 2 es correcto' 

 } else{ 
    resultadoClave.innerHTML= 'Clave incorrecta'
 }

}
