function main() {
    let opcao
    const quantidade = parseInt(prompt("Digite a quantidade de numeros da lista."))
    const array = new Array(quantidade)

    for (let i = 1; i <= quantidade; i++) {
        let valores = parseInt(prompt(`Digite o ${i} valor da lista.`))
        array.push(valores)
    }



    do {
        opcao = parseInt(prompt(`Escolha uma das opções
                                       1. Calculo da Media
                                       2. Calculo da Mediana
                                       3. Calculo da Moda
                                       0. Sair`))

        switch (opcao) {
            case 1:
                for (i = 1; 1< array.length; i++){
                    
                }
                break
            case 2:
                alert("2")
                break
            case 3:
                alert("3")
                break
            case 0:
                alert('Saindo..')
                break
            default:
                alert("Digite um valor valido.")
                break
        }
    } while (opcao !== 0)

    alert(array)
}