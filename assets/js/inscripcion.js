const form = document.getElementById("formInscripcion");
const listaInscriptos = document.getElementById("listaInscriptos");
const selectCurso = document.getElementById("selectCurso");
const inputEdad = document.getElementById("edadInscripto");


let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
let editandoId = null;

// guardar
function guardarStorage() {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
}

// inscriptos
function mostrarInscriptos() {

    listaInscriptos.innerHTML = "";

    inscripciones.forEach(insc => {

        const div = document.createElement("div");

        div.classList.add("card", "p-3", "mb-2");

        div.innerHTML = `
${insc.nombre} (${insc.edad} años) - ${insc.curso} 
<p>Alergias: ${insc.alergias || "Ninguna"}</p>

<button class="btn btn-sm editar" data-id="${insc.id}">
Editar
</button>

<button class="btn btn-sm eliminar" data-id="${insc.id}">
Eliminar
</button>
`;

        listaInscriptos.appendChild(div);

    });

}

inputEdad.addEventListener("input", function () {

    const edad = parseInt(this.value);

    Array.from(selectCurso.options).forEach(option => {

        const curso = cursos.find(c => c.id === parseInt(option.value));

        if (!curso) return;

        if (edad < 18 && curso.adultos) {

            option.disabled = true;

        } else {

            option.disabled = false;

        }

    });

});


// enviar formulario
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombreInscripto").value;
    const email = document.getElementById("emailInscripto").value;
    const edad = parseInt(inputEdad.value);
    const cursoId = parseInt(selectCurso.value);
    const alergias = document.getElementById("alergias").value;

    const cursoElegido = cursos.find(c => c.id === cursoId);

    if (!cursoElegido) {

        Swal.fire({
            icon: "error",
            title: "Debes seleccionar un taller"
        });

        return;
    }


    // validar nombre

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;

    if (!regexNombre.test(nombre)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre debe tener al menos 3 letras y solo puede contener letras"
        });
        return;
    }

    //doble inscripción

    const duplicado = inscripciones.some(insc =>
        insc.email === email &&
        insc.curso === cursoElegido.nombre
    );

    if (duplicado) {

        Swal.fire({
            icon: "error",
            title: "Ya estás inscripto",
            text: "No puedes reservar dos veces el mismo taller"
        });

        return;
    }


    // validacion cupos

    const cuposOcupados = inscripciones.filter(i =>
        i.curso === cursoElegido.nombre
    ).length;

    if (cuposOcupados >= cursoElegido.cupos) {

        Swal.fire({
            icon: "error",
            title: "Taller completo",
            text: "Este taller ya no tiene cupos disponibles"
        });

        return;
    }


    //inscripción
    if (editandoId !== null) {

        const index = inscripciones.findIndex(i => i.id === editandoId);

        inscripciones[index].nombre = nombre;
        inscripciones[index].email = email;
        inscripciones[index].edad = edad;
        inscripciones[index].alergias = alergias;
        inscripciones[index].curso = cursoElegido.nombre;

        guardarStorage();
        mostrarInscriptos();

        Swal.fire({
            icon: "success",
            title: "Inscripción actualizada"
        });

        editandoId = null;
        form.reset();

        return;
    }

    const nuevaInscripcion = {
        id: Date.now(),
        nombre: nombre,
        email: email,
        edad: edad,
        alergias: alergias,
        curso: cursoElegido.nombre
    };


    inscripciones.push(nuevaInscripcion);

    guardarStorage();

    mostrarInscriptos();


    // confirmacion

    Swal.fire({
        icon: "success",
        title: "Inscripción confirmada",
        text: "Te confirmamos la inscripción al taller"
    });


    form.reset();

});


// editar o eliminar 

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("editar")) {

        const id = parseInt(e.target.dataset.id);

        const inscripcion = inscripciones.find(i => i.id === id);

        document.getElementById("nombreInscripto").value = inscripcion.nombre;
        document.getElementById("emailInscripto").value = inscripcion.email;
        document.getElementById("edadInscripto").value = inscripcion.edad;
        document.getElementById("alergias").value = inscripcion.alergias || "";

        const curso = cursos.find(c => c.nombre === inscripcion.curso);

        selectCurso.value = curso.id;

        editandoId = id;

        Swal.fire({
            icon: "info",
            title: "Edita tu inscripción",
            text: "Modifica los datos y confirma nuevamente"
        });
    }

    if (e.target.classList.contains("eliminar")) {

        const id = parseInt(e.target.dataset.id);

        inscripciones = inscripciones.filter(insc => insc.id !== id);

        guardarStorage();

        mostrarInscriptos();

    }
});


