const numero = parseInt(prompt("Digite um numero."))
let contador = 0
const array = []

while(contador <= numero){
    
    if(contador % 2 === 0){
        array.push(contador) 
    }
    
    contador += 1

}  

alert(array)