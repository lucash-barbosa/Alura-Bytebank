import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


//console logs

console.log("ContaCorrente");
console.log("Saldo: " + contaCorrenteRicardo.saldo);
console.log("Agencia: " + contaCorrenteRicardo.agencia);
console.log(contaCorrenteRicardo.cliente);
console.log("cpf: " + contaCorrenteRicardo.cliente.cpf);

console.log("-------------");

console.log("ContaPoupança");
console.log("Saldo: " + contaPoupanca.saldo);
console.log("Agencia: " + contaPoupanca.agencia);
console.log(contaPoupanca.cliente);
console.log("cpf: " + contaPoupanca.cliente.cpf);

console.log("-------------");

console.log("ContaSalario");
console.log("Saldo: " + contaSalario.saldo);
console.log("Agencia: " + contaSalario.agencia);
console.log(contaSalario.cliente);
console.log("cpf: " + contaSalario.cliente.cpf);


//part 2
import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 100000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 50000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("lais", 78945612379, "456")

const gerentEestaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

//const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerentEestaLogado, diretorEstaLogado);