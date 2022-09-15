const clientes = [{
    nome: 'Andre',
    idade: 36,
    cpf: '1243434344',
    email: 'andre@email.com',
    fones: [ '55912234892', '5521988732433' ],
    dependentes:[{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
  },
  {
        nome:'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }]
    },
  {
    Nome: "Juliana",
    cpf: "434345535535",
    dependentes: [{
        nome: "Sophia",
        parentesco: "Filha",
        dataNasc: "30/08/2020"
    }]
  }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)