const notas = [10, 6.5, 8 , 7.5]

let SomaDasNotas = 0

for (let i = 0; i <notas.length; i++){
    SomaDasNotas += notas[i]

}

let media = SomaDasNotas/notas.length

console.log(media)