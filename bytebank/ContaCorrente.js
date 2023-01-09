export class ContaCorrente {
    agencia;
    cliente; 

    _saldo = 0;

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

    transferir (valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}