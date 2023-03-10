var nome = prompt("Digite seu nome: ")
alert("Olá " + nome + ", seja bem vinda ao jogo de adivinhe o número. Para começar aperte 'Ok'")

var numeroSecreto = parseInt(Math.random() * 1001)
var numeroDeTentaivas = 0

while(chute != numeroSecreto){

    var chute = prompt("Chute o um número entre 0 e 1000:")

    if (chute == numeroSecreto){
        alert("Acertou!")
    }
    else if (chute > numeroSecreto){
        alert("Errou... o número secreto é menor que " + chute)
    }
    else if (chute < numeroSecreto){
        alert("Errou... o número secreto é maior que " + chute)
    }

    numeroDeTentaivas += 1 // contador
}

alert(nome + " você acertou em " + numeroDeTentaivas + " tentativas")