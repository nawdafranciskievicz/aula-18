// Qual seria o resultado impresso no console, se o usuário digitasse o número "4"?

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}

//ele impreme no console.log um padrão de asteriscos
//*
//**
//***
//****