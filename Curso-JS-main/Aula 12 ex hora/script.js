function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    let msg2 = document.getElementById('msg2')
    var data = new Date() 
    var hora =data.getHours()
    var min =data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if(hora >=0 && hora < 12){
    //Bom Dia
    img.src = 'manha.png'
    document.body.style.background='#feb149'
    msg2.innerHTML='Bom dia'
    
    }else if(hora >= 12 && hora <= 18){
    //Boa tarde
    img.src ='tarde.png'
    document.body.style.background ='#afd3f1'
    msg2.innerHTML= 'Boa Tarde'

    }else {
       //Boa Noite
    img.src = 'noite.png'
    document.body.style.background ='#18575f'
    msg2.innerHTML = 'Boa Noite'
    } 
    }
    