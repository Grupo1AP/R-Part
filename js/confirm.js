function confirmar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || telefono == "" || direccion == "" || email == "" || mensaje == "") {
        alert("Por favor complete todos los campos.");
        return false;
    } else {
        var confirmacion = confirm("¿Está seguro que desea enviar estos datos?\n\nNombre: " + nombre + "\nCorreo electrónico: " + email + "\nTelefono: " + telefono + "\nDireccion: " + direccion + "\nMensaje: " + mensaje);
        if (confirmacion) {
            alert("Sus datos fueron enviados correctamente.");
        }
        return confirmacion;
    } 
}
