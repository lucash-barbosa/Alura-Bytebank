import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";


const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


//console logscls

console.log(contaCorrenteRicardo.saldo);
console.log(contaCorrenteRicardo.agencia);
console.log(contaCorrenteRicardo.cliente);
console.log(contaCorrenteRicardo.cliente.cpf);

console.log("-------------");

console.log(contaPoupanca.saldo);
console.log(contaPoupanca.agencia);
console.log(contaPoupanca.cliente);
console.log(contaPoupanca.cliente.cpf);
