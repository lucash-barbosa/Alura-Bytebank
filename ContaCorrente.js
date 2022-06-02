export class ContaCorrente{
    agencia;
    cliente;

    #saldo = 0;

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
