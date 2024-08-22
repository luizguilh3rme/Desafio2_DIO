let vitorias = 100
let derrotas = 9
let nivel = ""

let saldoVitorias = (vitorias - derrotas)

function getSaldo(){
    if(saldoVitorias <= 10){
        nivel = "Ferro"
    } 
    else if(saldoVitorias >= 11 && saldoVitorias < 21){
        nivel = "Bronze"
    }
    else if(saldoVitorias >= 21 && saldoVitorias < 51){
        nivel = "Prata"
    }
    else if(saldoVitorias >= 51 && saldoVitorias < 81){
        nivel = "Ouro"
    }
    else if(saldoVitorias >= 81 && saldoVitorias < 91){
       nivel = "Diamante"
    }
    else if(saldoVitorias >= 91 && saldoVitorias < 101){
        nivel = "Lendário"
    }
    else{
        nivel = "Imortal"
    }
}

getSaldo()

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)






