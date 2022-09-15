const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1243434344",
    email:"andre@email.com",
    fones:["55912234892","5521988732433"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011",
}

//console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
