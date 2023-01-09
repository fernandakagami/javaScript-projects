import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 111222333309);

const cliente2 = new Cliente("Alice", 888222333309);
console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

