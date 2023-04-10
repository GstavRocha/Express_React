class User{
    constructor(nome, sobrenome, cidade, inscricao){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cidade = cidade;
        this.inscricao = inscricao;
    }
    getNome(){
        return this.nome;
    }
    getSobreNome(){
        return this.sobrenome;
    }
    getCidade(){
        return this.cidade;
    }
    getInscricao(){
        return this.inscricao;
    }
    setNome( nome){
        this.nome = nome;
    }
    setSobreNome(sobre){
        this.sobrenome = sobre;
    }
    setCidade(cidade){
        this.cidade = cidade;
    }
    // inscrição não tem set pois contará apartir do momento de criação do cliente;
}
module.exports = User;
