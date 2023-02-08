function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML =`Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','menino.png')
            }else if (idade < 21){
                // Jovem
                img.setAttribute('src','jovemhomen.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','homen.png')
            } else {
                // Idoso
                img.setAttribute('src','homen3.png')
            }
                
            
        }else if(fsex[1].checked){
            genero ='Mulher'
            if(idade >= 0 && idade < 15){
                //Criança
                img.setAttribute('src','menina.png')
            }else if (idade <21){
                //Jovem
                img.setAttribute('src','jovemmulher.png')
            }else if (idade <50){
                //adulta
                img.setAttribute('src','mulher.png')
            }else {
                //Idosa
                img.setAttribute('src','mulher3.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}