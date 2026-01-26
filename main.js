
let saludar = true
if (saludar) {
    console.log ("Bienvenida a nuestros cursos")
}

const cursos = ["Desayuno y cerámica", "Merienda y cerámica", "Vino y cerámica"]

// // Ingresar edad
let edad = parseInt(prompt("Ingrese su edad"))

// Elección cursos
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
    let confirmacionCurso = prompt("¿Confirmas la inscripcion? si/no").toLowerCase ()

    if (confirmacionCurso == "si") {
        let nombre = prompt("Ingresa nombre y apellido")
        alert("Te inscribiste en:\n" + cursos[opcion - 1])
    } else {
        alert("Inscripcion cancelada")
    }
}

let opcionElegida = elegirCurso(edad)
console.log("Curso elegido:", cursos[opcionElegida - 1])
confirmacion (opcionElegida, cursos)