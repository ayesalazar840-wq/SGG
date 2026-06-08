// 1. USUARIOS DE PRUEBA (Requisito Obligatorio)
// Creamos dos usuarios predeterminados en una lista (arreglo de objetos)
const usuariosDePrueba = [
    { usuario: "alumno", clave: "1234" },
    { usuario: "profesor", clave: "5678" }
];

// 2. LÓGICA DE VALIDACIÓN DEL LOGIN
function login() {
    // Agarramos lo que escribió el usuario en la pantalla
    const userIngresado = document.getElementById("usuario").value;
    const passIngresada = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    // Buscamos si los datos coinciden con alguno de nuestros dos usuarios
    const usuarioValido = usuariosDePrueba.find(u => u.usuario === userIngresado && u.clave === passIngresada);

    if (usuarioValido) {
        mensaje.style.color = "green";
        mensaje.innerText = "Login correcto";
        // Guardamos en localStorage que el usuario inició sesión correctamente
        localStorage.setItem("usuarioLogueado", userIngresado);
    } else {
        mensaje.style.color = "red";
        mensaje.innerText = "Datos incorrectos";
    }
}

// 3. SWITCH DE TEMAS (Modo Claro / Modo Oscuro)
function cambiarTema() {
    // Nos fijamos qué tema tiene puesto el cuerpo de la página ahora mismo
    const temaActual = document.body.getAttribute("data-tema");
    
    if (temaActual === "oscuro") {
        // Si está oscuro, lo pasamos a claro
        document.body.removeAttribute("data-tema");
        localStorage.setItem("temaGuardado", "claro");
    } else {
        // Si está claro, lo pasamos a oscuro
        document.body.setAttribute("data-tema", "oscuro");
        localStorage.setItem("temaGuardado", "oscuro");
    }
}

// Al cargar la página, se fija si el usuario ya había elegido el modo oscuro antes
window.onload = function() {
    const temaGuardado = localStorage.getItem("temaGuardado");
    if (temaGuardado === "oscuro") {
        document.body.setAttribute("data-tema", "oscuro");
    }
};
