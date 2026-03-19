let cursos = []

async function cargarCursos(){

const respuesta = await fetch("./assets/data/cursos.json")

cursos = await respuesta.json()

const selectCurso = document.getElementById("selectCurso")

cursos.forEach(curso => {

const option = document.createElement("option")

option.value = curso.id

option.textContent =
`${curso.nombre} - ${curso.fecha} ${curso.horario}`

selectCurso.appendChild(option)

})

}

cargarCursos()