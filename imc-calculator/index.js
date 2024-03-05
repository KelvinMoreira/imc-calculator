let calcular = window.document.querySelector("#botaoCalcular")
function Calcular(){
    let nomebruto = window.document.querySelector("#inputNome")
    let alturabruta = window.document.querySelector("#inputAltura")
    let pesobruto = window.document.querySelector("#inputPeso")
    let res = window.document.querySelector("#areaResposta")

    if(nomebruto !== '' ){
        let nome = nomebruto.value
        let altura = Number(alturabruta.value)
        let peso = Number(pesobruto.value)
        let div1 = peso / altura
        let valorfinal = div1 / altura
        let IMC = Number(valorfinal.toFixed(2))
        res.innerHTML = `Olá, ${nome}, seu peso atual é ${peso}Kg. <br> O seu IMC é ${IMC}`
    }
}












/*const calcular = window.document.querySelector('#botaocalcular')

function Calcular(){
    const nomebruto = window.document.querySelector('#nome')
    const alturabruta = window.document.querySelector('#altura')
    const pesobruto = window.document.querySelector('#peso')
    const resultado = window.document.querySelector('#respostaarea')

    if (nomebruto, alturabruta, pesobruto !== ''){
        let nome = nomebruto.value
        let altura = Number(alturabruta.value)
        let peso = Number(pesobruto.value)
        let divisao1 = peso / altura
        let divisao2 = divisao1 / altura
        let valorfinal = Number(divisao2.toFixed(2))
        resultado.innerHTML = `Olá ${nome}, o seu peso atual é ${peso}kg e o seu imc é ${valorfinal}`
    }else{
    
    }
}*/
