async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        let consultaCep = await fetch(`http://viacep.com.br/ws/${cep}/json`);
        let consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!');
        }
        let cidade = document.getElementById('cidade');
        let endereco = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        endereco.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        estado.value = consultaCepConvertida.uf
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p class="erro__imagem"></p><p class="erro__texto">CEP inválido.</p>`;
        console.log(erro);
    }    
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


