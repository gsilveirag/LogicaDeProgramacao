function main() {
    const nome = prompt("Qual o seu nome?")
    let resposta = true
    let array = []

    while (resposta) {

        const opcao = parseInt(prompt(`Bem vindo, ${nome} !!!

        Programa de Cadastro:
        1. Cadastrar Lugares Visitados.
        2. Lugares que voce ja foi.
        3. Sair` ))



        switch (opcao) {
            case 1:
                const lugares = prompt("Quais lugares, voce ja visitou?")
                array.push(lugares)
                break
            case 2:
                alert(array.join(", "))
                break
            case 3:
                alert("Saindo....")
                resposta = false
                break
            default:
                alert("Digite uma opção invalida.")
                break
        }


    }

}