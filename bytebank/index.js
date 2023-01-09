import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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

