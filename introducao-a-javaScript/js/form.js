var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    let form = document.querySelector("#form-adiciona");

    // Extaindo intermações do paciente form
    let paciente = obtemPacienteDoFormulario(form);  

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;        
    }

    adicionarPacienteNaTabela(paciente);

    form.reset(); 

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculateImc(form.peso.value, form.altura.value)
    }

    return paciente;    
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido.");    
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida.");

    if (paciente.nome.length == 0) {
        erros.push("Campo nome não pode ser em branco.");
    }

    if (paciente.gordura.length == 0 ) {
        erros.push("Campo gordura não pode ser em branco.");
    }

    if (paciente.peso.length == 0) {
        erros.push("Campo peso não pode ser em branco.");
    }

    if (paciente.altura.length == 0) {
        erros.push("Campo altura não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionarPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    // Adicionando o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

