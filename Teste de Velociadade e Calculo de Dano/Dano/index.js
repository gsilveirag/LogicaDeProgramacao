let vivo = true

//////////////////////////////////////////////////////////////////////////////////////////////

const nome01 = prompt("Digite o Nome do Primeiro Personagem.")
let vida01 = parseFloat(prompt(`Quanto de vida o ${nome01} possui?`))
const resp01 = prompt(`O ${nome01} possui escudo? S/N`)
let escudo01 = 0


if (resp01.toLowerCase() === "s") {
    escudo01 = 100
} else if (resp01.toLowerCase() === "n") {
    escudo01 = 0
} else {
    alert("Digite um valor valido.")
}

let total01 = (vida01 + escudo01)

alert(`-----Personagem: ${nome01}----- \n
            Vida: ${vida01} \n
            Escudo: ${escudo01}`)



////////////////////////////////////////////////////////////////////////////////////////////// 

const nome02 = prompt("Digite o Nome do Segundo Personagem.")
let vida02 = parseFloat(prompt(`Quanto de vida o ${nome02} possui?`))
const resp02 = prompt(`O ${nome02} possui escudo? S/N`)
let escudo02 = 0



if (resp02.toLowerCase() === "s") {
    escudo02 = 100
} else if (resp02.toLowerCase() === "n") {
    escudo02 = 0
} else {
    alert("Digite um valor valido.")
}

let total02 = (vida02 + escudo02)

alert(`-----Personagem: ${nome02}----- \n
            Vida: ${vida02} \n
            Escudo: ${escudo02} `)


//////////////////////////////////////////////////////////////////////////////////////////////

while (vivo) {
    let escolha;
  
    do {
        escolha = parseInt (prompt(`Menu de escolhas: \n
        1.Jogador ---> ${nome01} <--- Atacar \n
        2.Jogador ---> ${nome02} <--- Atacar \n
        3. Mostrar Vida \n
        0. Sair`));
        


        switch (escolha) {
            case 1:
                if(total02 > 0){
                    let poderAtaque01 = parseFloat(prompt("Digite o poder de Ataque do primeiro Personagem."))
                    total02 = total02 - poderAtaque01
                }else{
                    alert(`Jogador ${nome02} morreu  !!!`)
                    vivo = false
                    break
                }
              break;
            case 2:
                if(total02 > 0){
                    let poderAtaque02 = parseFloat(prompt("Digite o poder de Ataque do segundo Personagem."))
                    total01 = total01 - poderAtaque02
                }else{
                    alert(`Jogador ${nome01} morreu  !!!`)
                    vivo = false
                    break
                }
                break
            case 3:
                alert(`Vida Joagador 1: ${total01}
                       Vida Joagador 2: ${total02}`)
               
                break
            case 0:
              console.log("Saindo do menu...");
              break;
            default:
              console.log("Escolha inválida. Digite um número válido.");
              break;
          }
        } while (escolha !== 0 && vivo);

}
    
