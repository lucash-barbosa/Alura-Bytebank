export class Cliente{

    #cpf;

    constructor(nome, cpf, senha){
        this.nome = nome;
        this.#cpf = cpf;
        this._senha = senha;
    }

    get cpf(){
        return this.#cpf
    }

}
