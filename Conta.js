export class Conta{

    #saldo;
    #cliente;
    #agencia;

    constructor(saldoInicial, cliente, agencia){
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    get agencia() {
        return this.#agencia;
    }


    sacar(valor){
        if (this.#saldo >=valor){
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;            
        }
    }

    transferir(valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}