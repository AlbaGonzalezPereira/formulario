const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const apelidos = document.getElementById("apelidos");
const idade = document.getElementById("idade");
const curso = document.getElementById("curso");
const centro = document.getElementById("centro");
const observacions = document.getElementById("observacions");
const actividades = document.querySelectorAll('div input[type="checkbox"]');//Engadiríamos o id antes do input
const consentimento = document.querySelector('input[name="consentimento"]:checked');
const inscribir = document.querySelector("#inscribir");
const cancelar = document.querySelector("#cancelar");

/**
 * creamos un evento para que cando se lle de inscribir, non envíe o formulario ata que llo
 * indiquemos. Función anónima
 */
formulario.addEventListener("submit", function (evento) {
    //error.innerHTML ="";
    evento.preventDefault(); // Para prevenir que a páxina se envíe por defecto
    // validar();
    if (
        validarCampos() && //Validamos os campos ao enviar
        confirm("¿Quieres enviar este formulario?")//cando é correcto pide que confirmemos
    ) {
        formulario.submit(); //se os campos validaron, enviará o formulario
    } else {
        alert("¡¡Por favor, revisa los datos obligatorios!!"); //salta alerta de envío cancelado
    }
});

/**
 * Declaramos unha función que valide os campos para que ao enviar de todos os erros, se os hai
 * e devolve se é válido o formulario
 */
function validarCampos(){
    let validarNom = validarNome();
    let validarApe = validarApelidos();
    let validarIda = validarIdade();
    let validarCur = validarCurso();
    let validarCen = validarCentro();
    let validarObs = validarObservacions();
    let validarAct = validarActividades();
    let validarCon = validarConsentimento();
    
    //devolvemos todas as variables
    return validarNom && validarApe && validarIda && validarCur && validarCen && validarObs && validarAct && validarCon
}

function validarNome(){
    let expresionReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s][A-ZÁÉÍÓÚÜÑ]+)*$/i;
    
    if (!expresionReg.test(nome.value.toUpperCase())) {
        nome.classList.add("is-invalid");
        nome.style.border = "2px solid red";
        let validNome = nome.parentNode.querySelector("p");
        if (!validNome) {
            validNome = document.createElement("p");
            validNome.setAttribute("class", "red");
            nome.parentNode.append(validNome);
        }
        validNome.innerHTML = "O nome é incorrecto";
        return false;
    } else {
        nome.classList.remove("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if (validNome) {
            validNome.remove();
        }
        return true;
    }
}

function validarApelidos(){
    return true;
}

function validarIdade(){
    return true;
}

function validarCurso(){
    return true;
}

function validarCentro(){
    return true;
}

function validarObservacions(){
    return true;
}

function validarActividades(){
    return true;
}

function validarConsentimento(){
   return true;
}