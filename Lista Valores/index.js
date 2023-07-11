const quantidade = parseInt(prompt("Quantos numeros voce vai digitar?"))
const array = []
let contador = 0



while (contador < quantidade) {
    
    for(let i= 1; i <= quantidade; i++){
        const lista = parseInt(prompt(`Digite o ${i} para colocar em sua lista.`))
        array.push(lista)
        contador += 1
    }
    
}

let maior = Math.max(...array)
let menor = Math.min(...array)

alert (`A lista do Array é: ${array} \n
        O maior valor digitado foi: ${maior} \n 
        O menor valor digitado foi: ${menor} `)
