const cliente ={
    nome: 'Andre',
    idade: 36,
    cpf: '1243434344',
    email: 'andre@email.com',
    fones: [ '55912234892', '5521988732433' ],
    dependentes:[{
        nome: 'Sara',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
  }]
}
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc:"04/01/2014"
  })


  //console.log(cliente)

  const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc ==="04/01/2014" )

  console.log(filhaMaisNova[0].nome)