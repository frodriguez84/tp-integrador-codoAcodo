var calculo = document.getElementById('calculos')
calculo.addEventListener('click', validacion)
var precio = 200
var textoAgregado
var cant

function validacion() {

    var valorNombre = document.getElementById('nombre')
    var nom = valorNombre.value

    var valorApellido = document.getElementById('apellido')
    var ape = valorApellido.value

    var valorEmail = document.getElementById('email')
    var email = valorEmail.value

    var valorCant = document.getElementById('cantidad')
    var cant = valorCant.value

    var valorSeleccion = document.getElementById('seleccion')
    var selec = valorSeleccion.value

    validaDatos(nom, ape, email, cant, selec)
}

function validaDatos(nom, ape, email, cant, selec) {
    if (nom === "") {
        alert('Por favor complete su NOMBRE')
    }
    else if (ape === "") {
        alert('Por favor complete su APELLIDO')
    }
    else if (email === "") {
        alert('Por favor complete su EMAIL')
    }
    else if (cant == 0) {
        alert('Por favor complete la Cantidad de entradas')
    }
    else if (selec == 0) {
        alert('Por favor elija una Categoria')
    }
    else {
        suma()
    }
}

function suma() {
    var x = Number(parseInt(cantidad.value))
    var valorBoton = document.getElementById('seleccion')
    var valor = valorBoton.value
    var cuenta
    switch (valor) {
        case "1":
            cuenta = (precio - (80 * precio / 100))
            break;
        case "2":
            cuenta = (precio - (50 * precio / 100))
            break;
        case "3":
            cuenta = (precio - (15 * precio / 100))
            break;
        default:
            break;
    }

    textoAgregado = document.getElementById('output')
    textoAgregado.textContent = "Total a Pagar: $  " + cuenta * x

}

function borro() {
    textoAgregado = document.getElementById('output')
    textoAgregado.textContent = "Total a Pagar: $ 0 "
}




