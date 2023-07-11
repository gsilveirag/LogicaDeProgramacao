const velocidade01 = parseFloat(prompt("Velocidade 01: "))
const velocidade02 = parseFloat(prompt("Velocidade 02: "))

if (!isNaN(velocidade01) && !isNaN(velocidade02)) {
    if (velocidade01 > velocidade02) {
        console.log(`A velocidade 01 esta em ${velocidade01}km, e velocidade 02 esta em ${velocidade02}km. Sendo assim o Carro 01 esta ${velocidade01 - velocidade02}km rapido.`)
    } else if (velocidade02 > velocidade01) {
        console.log(`A velocidade 01 esta em ${velocidade01}km, e velocidade 02 esta em ${velocidade02}km. Sendo assim o Carro 02 esta ${velocidade02 - velocidade01}km rapido.`)
    } else {
        console.log("A velocidade dos carros é igual.")
    }
} else {
    console.log("Digite a velocidade em numeros.")
}