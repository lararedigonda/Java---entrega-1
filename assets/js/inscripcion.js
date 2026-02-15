// DOM
const selectCurso = document.getElementById("selectCurso");
const form = document.getElementById("formInscripcion");
const listaInscriptos = document.getElementById("listaInscriptos");
const inputEdad = document.getElementById("edadInscripto");
const mensajeEdad = document.getElementById("mensajeEdad");

// Storage
let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];

// Cursos
function cargarCursos() {
    cursos.forEach(curso => {
        const option = document.createElement("option");
        option.value = curso.id;
        option.textContent = `${curso.nombre} - ${curso.fecha} ${curso.horario}`;
        selectCurso.appendChild(option);
    });
}

// Inscripcion
function renderInscriptos() {
    listaInscriptos.innerHTML = "";

    inscripciones.forEach(insc => {
        const div = document.createElement("div");
        div.classList.add("card", "p-3", "mb-2");

        div.innerHTML = `
            <strong>${insc.nombre}</strong> (${insc.edad} años) - ${insc.curso}
        <button class="btn btn-sm float-end btn-eliminar" data-id="${insc.id}">
            Eliminar
        </button>
        `;

        listaInscriptos.appendChild(div);
    });
}

//Storage
function guardarEnStorage() {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
}

//Edad
inputEdad.addEventListener("input", function () {
    const edad = parseInt(this.value);
    mensajeEdad.textContent = "";

    Array.from(selectCurso.options).forEach(option => {
        const curso = cursos.find(c => c.id === parseInt(option.value));
        if (!curso) return;

        if (edad < 18 && curso.adultos) {
            option.disabled = true;
            mensajeEdad.textContent = "Si eres menor de 18 no puedes inscribirte al taller con vino.";
        } else {
            option.disabled = false;
        }
    });
});

// Evento
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreInscripto").value;
    const email = document.getElementById("emailInscripto").value;
    const edad = parseInt(inputEdad.value);
    const cursoId = parseInt(selectCurso.value);

    const cursoElegido = cursos.find(c => c.id === cursoId);

    if (edad < 18 && cursoElegido.adultos) {
        mensajeEdad.textContent = "No puedes inscribirte al taller con vino si eres menor de edad.";
        return;
    }

    const nuevaInscripcion = {
        id: Date.now(),
        nombre,
        email,
        edad,
        curso: cursoElegido.nombre
    };

    inscripciones.push(nuevaInscripcion);
    guardarEnStorage();
    renderInscriptos();
    form.reset();
});

//Eliminar
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn-eliminar")) {

        const id = parseInt(e.target.dataset.id);

        inscripciones = inscripciones.filter(insc => insc.id !== id);

        guardarEnStorage();

        renderInscriptos();
    }
});

cargarCursos();
renderInscriptos();