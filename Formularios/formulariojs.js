var nombre= document.getElementById("nombre");
var errorNombre= document.getElementById("errorNombre");

/*if (nombre.value.length == 0) {
    errorNombre.innerHTML = "El campo nombre no puede estar vacío";
    errorNombre.style.color = "red";
    nombre.style.border = "1px solid red";
    nombre.focus();

}
else if (nombre.value.length > 40) {
    errorNombre.innerHTML = "El campo nombre no puede tener más de 40 caracteres";
    errorNombre.style.color = "red";
    nombre.style.border = "1px solid red";
    nombre.focus();
}
else {
    errorNombre.innerHTML = "";
    nombre.style.border = "1px solid green";
}*/
function validarNombre() {

    let nombre = document.getElementById("nombre");
    let errorNombre = document.getElementById("errorNombre");
    let boton = document.getElementById("boton");
    let nombreRegex = /^[a-zA-ZñÑáéíóúàèòÀÈÒü·çÇ\s]*$/;
    let err = false;

    if (nombre.value.length <2) {
        err = true;
        errorNombre.innerHTML = "El campo nombre no puede tener menos de 2 caracteres";
        /*errorNombre.innerHTML = "El campo nombre no puede estar vacío";*/
        errorNombre.style.backgroundColor = "tomato";
        nombre.style.border = "2px solid red";
        boton.disabled = true;
       /*nombre.focus();*/

    }
    else if (nombre.value.length > 40) {
        errorNombre.innerHTML = "El campo nombre no puede tener más de 40 caracteres";
        errorNombre.style.color = "red";
        nombre.style.border = "2px solid red";
       /* nombre.focus();*/
    }
    else {
        errorNombre.innerHTML = "";
        nombre.style.border = "2px solid green";
    }
}
function validarApellidos() {                  
    let apellido = document.getElementById("apellidos");
    let errorApellidos = document.getElementById("errorApellidos");
    let boton = document.getElementById("boton");
    let apellidosRegex = /^[a-zA-ZñÑáéíóúàèòÀÈÒü·çÇ\s]*$/;
    let err = false;

    if (apellidos.value.length < 4) {
        err = true;
        errorApellidos.innerHTML = "El campo apellido no puede tener menos de 4 caracteres";
        errorApellidos.style.backgroundColor = "tomato";
        apellidos.style.border = "2px solid red";
        boton.disabled = true;
    }
    else if (apellidos.value.length > 50) {
        errorApellidos.innerHTML = "El campo apellido no puede tener más de 50 caracteres";
        errorApellidos.style.color = "red";
        apellidos.style.border = "2px solid red";
    }
    else {
        errorApellidos.innerHTML = "";
        apellidos.style.border = "2px solid green";
    }
}
function validarEdad(){
    let edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");
    let boton = document.getElementById("boton");
    let edadRegex = /^[0-9]*$/;
    let err = false;

    if (edad.value < 18) {
        err = true;
        errorEdad.innerHTML = "El campo edad tiene que ser mayor de 18 años";
        errorEdad.style.backgroundColor = "tomato";
        edad.style.border = "2px solid red";
        boton.disabled = true;
    }
    else if (edad.value > 113) {
        errorEdad.innerHTML = "El campo edad no puede tener más de 113 años";
        errorEdad.style.color = "red";
        edad.style.border = "2px solid red";
    }
    else {
        errorEdad.innerHTML = "";
        edad.style.border = "2px solid green";
    }
}
function validarEmail(){
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    let boton = document.getElementById("boton");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let err = false;

    if (!emailRegex.test(email.value)) {
        err = true;
        errorEmail.innerHTML = "El campo email no es válido";
        errorEmail.style.backgroundColor = "tomato";
        email.style.border = "2px solid red";
        boton.disabled = true;
    }
    else {
        errorEmail.innerHTML = "";
        email.style.border = "2px solid green";
    }
}
function validarTelefono(){
    let telefono = document.getElementById("telefono");
    let errorTelefono = document.getElementById("errorTelefono");
    let boton = document.getElementById("boton");
    let telefonoRegex = /^[0-9]*$/;
    let err = false;

    if (telefono.value.length < 9) {
        err = true;
        errorTelefono.innerHTML = "El campo teléfono no puede tener menos de 9 caracteres";
        errorTelefono.style.backgroundColor = "tomato";
        telefono.style.border = "2px solid red";
        boton.disabled = true;
    }
    else if (telefono.value.length > 9) {
        errorTelefono.innerHTML = "El campo teléfono no puede tener más de 9 caracteres";
        errorTelefono.style.color = "red";
        telefono.style.border = "2px solid red";
    }
    else {
        errorTelefono.innerHTML = "";
        telefono.style.border = "2px solid green";
    }
}
function validarUsuario(){
    let usuario = document.getElementById("usuario");
    let errorUsuario = document.getElementById("errorUsuario");
    let boton = document.getElementById("boton");
    let usuarioRegex = /^[a-zA-Z0-9-!/()_;.,:]*$/;
    let err = false;

    if (usuario.value.length < 2) {
        err = true;
        errorUsuario.innerHTML = "El campo usuario no puede tener menos de 2 caracteres";
        errorUsuario.style.backgroundColor = "tomato";
        usuario.style.border = "2px solid red";
        boton.disabled = true;
    }
    else if (usuario.value.length > 20) {
        errorUsuario.innerHTML = "El campo usuario no puede tener más de 20 caracteres";
        errorUsuario.style.color = "red";
        usuario.style.border = "2px solid red";
    }
    else {
        errorUsuario.innerHTML = "";
        usuario.style.border = "2px solid green";
    }
}
function validarPassword() {
    let password = document.getElementById("password");
    let errorPassword = document.getElementById("errorPassword");
    let boton = document.getElementById("boton");
    let progressBar = document.getElementById("passwordStrength");
    let err = false;

    // Expresiones regulares para las condiciones
    let lengthRegex = /.{10,}/;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let numberRegex = /[0-9]/;
    let specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    // Inicializar el nivel de seguridad
    let strength = 0;

    // Verificar cada condición y aumentar el nivel de seguridad
    if (lengthRegex.test(password.value)) strength++;
    if (uppercaseRegex.test(password.value)) strength++;
    if (lowercaseRegex.test(password.value)) strength++;
    if (numberRegex.test(password.value)) strength++;
    if (specialCharRegex.test(password.value)) strength++;

    // Actualizar la barra de progreso y su color
    progressBar.value = strength;
    switch (strength) {
        case 1:
            progressBar.style.setProperty('--progress-color', 'red');
            break;
        case 2:
            progressBar.style.setProperty('--progress-color', 'orange');
            break;
        case 3:
            progressBar.style.setProperty('--progress-color', 'yellow');
            break;
        case 4:
            progressBar.style.setProperty('--progress-color', 'lightgreen');
            break;
        case 5:
            progressBar.style.setProperty('--progress-color', 'green');
            break;
        default:
            progressBar.style.setProperty('--progress-color', 'red');
    }

    // Mostrar mensajes de error si no se cumplen las condiciones
    if (strength < 5) {
        err = true;
        errorPassword.innerHTML = "La contraseña debe tener al menos 10 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        errorPassword.style.backgroundColor = "tomato";
        password.style.border = "2px solid red";
        boton.disabled = true;
    } else {
        errorPassword.innerHTML = "";
        password.style.border = "2px solid green";
        boton.disabled = false;
    }
}

function mostrarPassword(inputId, ojoId) {
    let password = document.getElementById(inputId);
    let ojo = document.getElementById(ojoId);
    if (password.type === "password") {
        password.type = "text";
        ojo.src = "img/eye-slash-solid.svg"; // Cambia a la imagen de ojo cerrado
    } else {
        password.type = "password";
        ojo.src = "img/eye-solid.svg"; // Cambia a la imagen de ojo abierto
    }
}

function validarRepeatPassword() {
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeteatpassword");
    let errorRepeatPassword = document.getElementById("errorRepeteatPassword");
    let boton = document.getElementById("boton");
    let err = false;

    if (password.value !== repeatPassword.value) {
        err = true;
        errorRepeatPassword.innerHTML = "Las contraseñas no coinciden";
        errorRepeatPassword.style.backgroundColor = "tomato";
        repeatPassword.style.border = "2px solid red";
        boton.disabled = true;
    } else {
        errorRepeatPassword.innerHTML = "";
        repeatPassword.style.border = "2px solid green";
        boton.disabled = false;
    }
}
