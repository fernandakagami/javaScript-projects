class Cliente {
    nome;
    cpf;    
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111222333309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 888222333309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);

