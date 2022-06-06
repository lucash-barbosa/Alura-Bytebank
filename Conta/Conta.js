export class Conta{

    #saldo;
    #cliente;
    #agencia;

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria estanciar um objeto do tipo Conta diretamente");
        }

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
        throw new Error ("O método Sacar de Conta é abstrato");
    }

    _calculaSaque(valor, taxa){
        const valorSacado = taxa * valor;
        if (this.#saldo >=valorSacado){
            this.#saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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