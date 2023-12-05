'use strict'
class ValidadorFormulario{
    constructor(idFormulario){
       
this.form = document.getElementById(idFormulario);
this.clave = document.getElementById('inputPassword');
this.correo = document.getElementById('inputEmail');
this.direccionresidencia = document.getElementById('inputAddress');
this.direcciontrabajo = document.getElementById('inputAddress2');
this.ciudad = document.getElementById('inputCity');
this.departamento = document.getElementById('inputState');
this.zip = document.getElementById('inputZip');
this.guardar = document.getElementById('btnGuardar');
   
// Span
this.claveError = document.getElementById('claveError');
this.correoError = document.getElementById('correoError');
this.direccionresidenciaError = document.getElementById('direccionresidenciaError');
this.direcciontrabajoError = document.getElementById('direcciontrabajoError');
this.ciudadError = document.getElementById('ciudadError');
this.departamentoError = document.getElementById('departamentoError');
this.zipError = document.getElementById('zipError');
this.guardarError = document.getElementById('guardarError');

this.form.addEventListener("submit", (event) =>{
    event.preventDefault();
    if (this.verificar()){
        alert("Guardado de manera exitosa")
    }
});
}

verificar(){
    let verifica = true;
    
    if (this.correo.value === ""){
        this.correoError.textContent = "El campo debe ser rellenado"
        this.correo.classList.add("csserror");
        verifica = false;
    } else {
        this.correoError.textContent = "";
        this.correo.classList.remove("csserror")
    }

    if (this.clave.value === ""){
        this.claveError.textContent = "El campo debe ser rellenado"
        this.clave.classList.add("csserror");
        verifica = false;
    } else {
        this.claveError.textContent = "";
        this.clave.classList.remove("csserror")
    }

    if (this.direccionresidencia.value === ""){
        this.direccionresidenciaError.textContent = "El campo debe ser rellenado"
        this.direccionresidencia.classList.add("csserror");
        verifica = false;
    } else {
        this.direccionresidenciaError.textContent = "";
        this.direccionresidencia.classList.remove("csserror")
    }

    if (this.direcciontrabajo.value === ""){
        this.direcciontrabajoError.textContent = "El campo debe ser rellenado"
        this.direcciontrabajo.classList.add("csserror");
        verifica = false;
    } else {
        this.direcciontrabajoError.textContent = "";
        this.direcciontrabajo.classList.remove("csserror")
    }

    if (this.ciudad.value === ""){
        this.ciudadError.textContent = "El campo debe ser rellenado"
        this.ciudad.classList.add("csserror");
        verifica = false;
    } else {
        this.ciudadError.textContent = "";
        this.ciudad.classList.remove("csserror")
    }

    if (this.departamento.value === ""){
        this.departamentoError.textContent = "El campo debe ser rellenado"
        this.departamento.classList.add("csserror");
        verifica = false;
    } else {
        this.departamentoError.textContent = "";
        this.departamento.classList.remove("csserror")
    }

    if (this.zip.value === ""){
        this.zipError.textContent = "El campo debe ser rellenado"
        this.zip.classList.add("csserror");
        verifica = false;
    } else {
        this.zipError.textContent = "";
        this.zip.classList.remove("csserror")
    }

    return verifica;
}
}


/*
function validar(){
    const miCorreo = document.querySelector('#inputEmail').value;
    validarCorreo(miCorreo);
}
const validarCorreo = (cadena) => {
    const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    if (!cadena.match(correoRegex)){
        alert('Correo inválido')
    }
}
*/