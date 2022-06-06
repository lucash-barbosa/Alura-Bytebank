export class Funcionario{
    #nome;
    #salario;
    #cpf;

    constructor(nome, salario, cpf){
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}