//Considere que você tenha acesso a um "array" que é composto somente de números. Crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// 1) Escreva uma função que imprime cada valor do "array" em uma linha. 
//2) Escreva uma função que imprime cada um dos valores do "array" divididos por 10. 
//3) Escreva uma função que cria um novo array contendo somente os números pares do "array original" e, depois, imprima esse novo array. 
//4) Escreva uma função que cria um novo array contendo strings no seguinte formato: "O elemento do índice 'i' é: 'numero'". Depois, imprima esse novo array.
//5) Escreva uma função que imprime no console o maior e o menor números contidos no "array original".


const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimirLista(itens) {
    for (let i = 0; i < itens.length; i++) {
        console.log(itens[i])
    }
}

function imprimirValoresDivididos(itens) {
    for (let i = 0; i < itens.length; i++) {
        console.log(itens[i] / 10)
    }
}

function filtrarNumerosPares(numeros) {
    const numerosPares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i])
        }
    }
    console.log(numerosPares)
}

function identificarElementos(itens) {
    const elementosFormatados = []
    for (let i = 0; i < itens.length; i++) {
        elementosFormatados.push(`O elemento do índice ${i} é: ${itens[i]}`)
    }
    console.log(elementosFormatados)
}

function imprimirMaiorMenor(itens) {
    let maiorNumero = itens[0]
    let menorNumero = itens[0]
    for (let i = 1; i < itens.length; i++) {
        if (itens[i] > maiorNumero) {
            maiorNumero = itens[i]
        }
        if (itens[i] < menorNumero) {
            menorNumero = itens[i]
        }
    }
    console.log(`Maior número: ${maiorNumero}`)
    console.log(`Menor número: ${menorNumero}`)
}

imprimirLista(arrayOriginal)
imprimirValoresDivididos(arrayOriginal)
filtrarNumerosPares(arrayOriginal)
identificarElementos(arrayOriginal)
imprimirMaiorMenor(arrayOriginal)