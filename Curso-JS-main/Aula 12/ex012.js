var agora = new Date()
var hora = agora.getHours()
var min = new Date()
var Min = min.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${Min} minutos.`)
if(hora <= 5){
    console.log('Boa madrugada')
}else if(hora < 12){
    console.log('Bom dia!')
}else if(hora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}