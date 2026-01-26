// // let saludar = true
// // if (saludar) {
// //     console.log ("Bienvenida a nuestros cursos")
// // }

// // const cursos = ["Desayuno y cerámica", "Merienda y cerámica", "Vino y cerámica"]

// // // Ingresar edad

// // let edad = parseInt(prompt("Ingrese su edad"))

// // // condicional
// // if (edad >= 18) {

// //     let opcion = parseInt(prompt("Podes inscribirte en los siguientes cursos:\n" + "1-" + "Desayuno y cerámica" + "\n" + "2-" + "Merienda y cerámica" + "\n" + "3-" + "Vino y cerámica" + "\n" + "Ingresa el número del curso que desees"))
// //     switch (opcion) {
// //         case 1: 
// //         alert ("Desayuno y cerámica 7/2 10:00 hs")
// //         break
// //         case 2: 
// //         alert ("Merienda y cerámica 17/2 16:00 hs")
// //         break
// //         case 3: 
// //         alert ("Vino y cerámica 7/2 19:00 hs")
// //         break
// //         default: 
// //         alert ("Opción incorrecta")
// //         }

// //     let confirmacion = prompt("Confirmas la inscripcion? si/no")
// //         if (confirmacion == "si") {
// //         let inscripcion = prompt("ingresa nombre y apellido")
// //         alert("Te inscribiste en: " + cursos[opcion - 1])
// //     }}
// //     else {
// //         let opcion = parseInt(prompt("Podes inscribirte en los siguientes cursos:\n" + "1-" + "Desayuno y cerámica" + "\n" + "2-" + "Merienda y cerámica" + "\n"+ "Ingresa el número del curso que desees"))
// //         switch (opcion) {
// //         case 1: 
// //         alert ("Desayuno y cerámica 7/2 10:00 hs")
// //         break
// //         case 2: 
// //         alert ("Merienda y cerámica 17/2 16:00 hs")
// //         break
// //         default: 
// //         alert ("Opción incorrecta")
// //         }
    
// //         let confirmacion = prompt("Confirmas la inscripcion? si/no")
// //     if (confirmacion == "si") {
// //         let inscripcion = prompt("ingresa nombre y apellido")
// //         alert("Te inscribiste en: " + cursos[opcion - 1])
// //     }}

let saludar = true
if (saludar) {
    console.log ("Bienvenida a nuestros cursos")
}

const cursos = ["Desayuno y cerámica", "Merienda y cerámica", "Vino y cerámica"]

// Ingresar edad
let edad = parseInt(prompt("Ingrese su edad"))

function elegirCurso(edad) {
    let opcion = 0

    while (
        opcion < 1 ||(edad < 18 && opcion > 2) || (edad >= 18 && opcion > 3)) {

// condicional
        if (edad >= 18) {
            opcion = parseInt(prompt("Podés inscribirte en los siguientes cursos:\n" +"1- Desayuno y cerámica\n" +"2- Merienda y cerámica\n" +"3- Vino y cerámica\n" +"Ingresá el número del curso"))
        switch (opcion) {
        case 1: 
        alert ("Desayuno y cerámica 7/2 10:00 hs")
        break
        case 2: 
        alert ("Merienda y cerámica 17/2 16:00 hs")
        break
        case 3: 
        alert ("Vino y cerámica 7/2 19:00 hs")
        break
        default: 
        alert ("Opción incorrecta")
        }
        } else {
            opcion = parseInt(prompt("Podés inscribirte en los siguientes cursos:\n" + "1- Desayuno y cerámica\n" + "2- Merienda y cerámica\n" + "Ingresá el número del curso"))
        switch (opcion) {
        case 1: 
        alert ("Desayuno y cerámica 7/2 10:00 hs")
        break
        case 2: 
        alert ("Merienda y cerámica 17/2 16:00 hs")
        break
        default: 
        alert ("Opción incorrecta")
        }
    }
}
    return opcion
}

function confirmacion(opcion, cursos) {
    let confirmacionCurso = prompt("¿Confirmas la inscripcian? si/no").toLowerCase ()

    if (confirmacionCurso == "si") {
        let nombre = prompt("Ingresá nombre y apellido")
        alert("Te inscribiste en:\n" + cursos[opcion - 1])
    } else {
        alert("Inscripción cancelada")
    }
}

let opcionElegida = elegirCurso(edad)
console.log("Curso elegido:", cursos[opcionElegida - 1])
confirmacion (opcionElegida, cursos)