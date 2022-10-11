let titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = (paciente.querySelector(".info-imc"));

    let pesoEValido = true;
    let alturaEValida = true;

    if (peso <= 0 || peso >= 500) {
        console.log('Peso inválido');
        pesoEValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if ( altura <= 0 || altura >= 3.00) {
        console.log('Altura inválida');
        alturaEValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEValida && pesoEValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}




