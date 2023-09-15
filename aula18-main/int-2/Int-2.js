// Leia o código abaixo

const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
//numeros maiores que 18
//19,21,23,25,27,30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, a sintaxe "for...of..." é suficiente? Se sim, o que poderia ser usado para fazer isso?
//A sintaxe "for...of" por si só não permite acessar o índice dos elementos da lista diretamente. Para acessar o índice,pode usar uma nova variável ou combinar os dois "for...of" e "for...if"com um array para acessar o índice de cada elemento. Portanto,a sintaxe "for...of" é suficiente para acessar o índice. exemplo cima