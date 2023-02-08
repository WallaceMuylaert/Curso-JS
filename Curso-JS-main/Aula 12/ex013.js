var agora = new Date()
var diaSem = agora.getDay()
var hor = new Date()
var hora = hor.getHours()
var min =new Date()
var minutos = min.getMinutes()
var dat = new Date()
var data = dat.getDate()
var ano = new Date()
var Ano = ano.getFullYear()
var mes = new Date()
var Mes = mes.getUTCMonth()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia invalido !')
        break
}
        console.log(`${hora}:${minutos}`)
        console.log(`${data}/${Mes+1}/${Ano}`)
