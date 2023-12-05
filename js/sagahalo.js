'use strict'
function consulDatos() {
    fetch("./objetos/sagaimg.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const sagasHalo = document.querySelector("#sagasdehalo")
            console.log(data)
            for (let i = 0; i < data.sagas.length; i++) {
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("mejorsaga")
                const crearImag = document.createElement("img")
                crearImag.classList.add("mejorsaga2")
                crearImag.src = (data.sagas[i].imagen)
                console.log(data.sagas[i].imagen)
                console.log(crearImag)
                crearDoc.innerHTML = `<span class="uno">${data.sagas[i].nombre}</span>`
                crearDoc.appendChild(crearImag)
                sagasHalo.appendChild(crearDoc)                
            }
        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });
}
consulDatos();