function main() {
    const continuar = true
    let valor = 0

    while (continuar) {

        escolha = parseInt(prompt(`Converta o Real em:
        1. Dollar 
        2. Euro 
        3. Libra 
        0. Sair`));

        switch (escolha) {
            case 1:
                valor = parseFloat(prompt("Digite o valor em real."))
                let dollar = (valor/4.87)
                alert(`De R$${valor}.00 , voce tera: U$$${dollar.toFixed(2)}`)
                break
            case 2:
                valor = parseFloat(prompt("Digite o valor em real."))
                let euro = (valor/5.35)
                alert(`De R$${valor}.00 , voce tera: €${euro.toFixed(2)}`)
                break
            case 3:
                valor = parseFloat(prompt("Digite o valor em real."))
                let libra = (valor/6.25)
                alert(`De R$${valor}.00 , voce tera: £${libra.toFixed(2)}`)
                break
            case 0:
                alert("Saindo...")
                continuar = false
            default:
                alert("Digite um valor valido.")
                break
        }

    }
}

