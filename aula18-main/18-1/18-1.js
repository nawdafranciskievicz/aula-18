// Pergunte ao usuário quantos bichos de estimação ele tem e guarde esse dado em uma variável.
//Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!".
//Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.
//Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//Por fim, imprima no console o "array" completo, com os nomes dos bichos.


const numerodePets = Number(prompt("Quantos bichos de estimação você tem?"))


if (numerodePets === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if (numerodePets > 0) {

    const nome = []

    for (let i = 0; i < numerodePets; i++) {
        const nome = prompt(`Digite o nome do pet ${i + 1}:`)
        nome.push(nome)
    }

    console.log('Nomes dos bichos de estimação:')
    console.log(nome)
}