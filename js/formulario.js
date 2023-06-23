const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, select, textarea');

const expresiones = {
    numorder: /^[0-9\s-]{1,7}$/, //numeros y guion
    cliente: /^[a-zA-ZÁ-ÿ\s]{1,48}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 48 caracteres
    razon: /^[a-zA-ZÁ-ÿ\s\.,?¿]{0,700}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 700 caracteres
    direccion: /^[a-z-A-Z0-9\s\.#,]{1,200}$/, //Lestras mayusculas y minusculas, numeros, numerales, puntos y espacios
    nit: /^[0-9-]{12,14}$/, //Numeros, guion bajo y de 12 a 14 caracteres
    vendedor: /^[a-zA-ZÁ-ÿ\s]{1,48}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 48 caracteres
    nserie: /^[A-Z0-9]{1,23}$/, //Letras mayusculas y numeros
    nmotor: /^[A-Z0-9]{1,14}$/, //Letras mayusculas y numeros
    nplaca: /^[a-zA-ZÁ-ÿ0-9\s-,]{7,23}$/, //Letras mayusculas y minusculas, numeros, espacios, guiones y de 17 a 23 caracteres
    vehiculo: /^[a-zA-Z0-9\s]{2,20}$/, //Letras mayusculas y minusculas, numeros y 8 a 20 caracteres
    linea: /^[a-zA-ZÁ-ÿ]{3,17}$/, //Letras Mayusculas y minusculas
    kilometros: /^[KM0-9\.,]{1,12}$/, //Numeros y km
    aseguradora: /^[a-zA-ZÁ-ÿ\s\.]{4,18}$/, //Letras mayuculas y minusculas, espacios
    minimo: /^[0-9'.]{6,17}$/, //Numeros y de 6 a 17 caracteres
    poliza: /[0-9'.]{7,11}$/, //Numeros y caracteres
    siniestro:/^[0-9]{7,10}$/, //numeros
    deducible:/^[0-9%]{2,5}$/, //Numeros y porcentage
    nota0: /^[a-zA-ZÁ-ÿ\s\.,?¿]{1,700}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 700 caracteres
    nota1: /^[a-zA-ZÁ-ÿ\s\.,?¿]{1,700}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 700 caracteres
    nota2: /^[a-zA-ZÁ-ÿ\s\.,?¿]{1,700}$/, //Lestras mayusculas y minusculas, espacios, acentos y de 1 a 700 caracteres
}

const campos= {
    numorder: false,
    cliente:false,
    razon:false,
    direccion:false,
    nit:false,
    vendedor:false,
    nserie:false,
    nmotor:false,
    nplaca:false,
    vehiculo:false,
    linea:false,
    kilometros:false,
    aseguradora:false,
    minimo:false,
    poliza:false,
    siniestro:false,
    deducible:false,
    nota0:false,
    nota1:false,
    nota2: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "numorder":
            validarCamp(expresiones.numorder, e.target, 'numorder')
        break;
    }

    switch (e.target.name) {
        case "cliente":
            validarCamp(expresiones.cliente, e.target, 'cliente')
        break;
    }

    switch (e.target.name) {
        case "razon":
            validarCampNotas(expresiones.razon, e.target, 'razon')
        break;
    }

    switch (e.target.name) {
        case "direccion":
            validarCamp(expresiones.direccion, e.target, 'direccion')
        break;
    }
    
    switch (e.target.name) {
        case "nit":
            validarCamp(expresiones.nit,e.target, 'nit')
        break;
    }
    
    switch (e.target.name) {
        case "vendedor":
            validarCamp(expresiones.vendedor, e.target, 'vendedor')
        break;
    }
    
    switch (e.target.name) {
        case "nserie":
            validarCamp(expresiones.nserie, e.target, 'nserie')
        break;
    }
    
    switch (e.target.name) {
        case "nmotor":
            validarCamp(expresiones.nmotor, e.target, 'nmotor')
        break;
    }
    
    switch (e.target.name) {
        case "nplaca":
            validarCamp(expresiones.nplaca, e.target, 'nplaca')
        break;
    }
    
    switch (e.target.name) {
        case "vehiculo":
            validarCamp(expresiones.vehiculo, e.target, 'vehiculo')
        break;
    }    
    
    switch (e.target.name) {
        case "linea":
            validarCamp(expresiones.linea, e.target, 'linea')
        break;
    }    
    
    switch (e.target.name) {
        case "kilometros":
            validarCamp(expresiones.kilometros, e.target, 'kilometros')
        break;
    }

    switch (e.target.name) {
        case "aseguradora":
            validarCamp(expresiones.aseguradora, e.target, 'aseguradora')
        break;
    }

    switch (e.target.name) {
        case "minimo":
            validarCamp(expresiones.minimo, e.target, 'minimo')
        break;
    }

    switch (e.target.name) {
        case "poliza":
            validarCamp(expresiones.poliza, e.target, 'poliza')
        break;
    }

    switch (e.target.name) {
        case "siniestro":
            validarCamp(expresiones.siniestro, e.target, 'siniestro')
        break;
    }

    switch (e.target.name) {
        case "deducible":
            validarCamp(expresiones.deducible, e.target, 'deducible')
        break;
    }

    switch (e.target.name) {
        case "nota0":
            validarCampNotas(expresiones.nota0, e.target, 'nota0')
        break;
    }

    switch (e.target.name) {
        case "nota1":
            validarCampNotas(expresiones.nota1, e.target, 'nota1')
        break;
    }

    switch (e.target.name) {
        case "nota2":
            validarCampNotas(expresiones.nota2, e.target, 'nota2')
        break;
    }

}

const validarCamp = (expresion, input, campo) =>{
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false;
    }
}

const validarCampNotas = (expresion, input, campo) =>{
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        campos[campo] = true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        campos[campo] = true;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.numorder && campos.cliente && campos.direccion && campos.nit && campos.vendedor && campos.nserie && campos.nmotor && campos.nplaca && campos.vehiculo && campos.linea && campos.kilometros && campos.aseguradora && campos.minimo  && campos.poliza  && campos.siniestro  && campos.deducible){
            formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000)

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
                icono.classList.remove('formulario__grupo-correcto');
            });
            
        }else{
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }

});

