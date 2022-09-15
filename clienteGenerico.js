 function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor){
        this.saldo +=valor
    } 
 }

 const Andre = new cliente("André","12321434343","andre@eemail.com", 100)

 console.log(Andre)