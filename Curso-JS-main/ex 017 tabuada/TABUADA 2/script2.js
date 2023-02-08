function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, digite um numero!')
    } else {
       let n = Number(num.value)
       let c = 1
       tab.innerHTML = ''
       for(let c = 1;c <= 100 ;c++){
        let mult = document.createElement('option')
        mult.text = `${n} x ${c} = ${n*c}`
        mult.value = `tab${c}`
        document.querySelector('select#seltab').appendChild(mult)
    }}}
       
       /* não funcionou
        while(c <= 10) {
           let item = document.getElementById('option')
           item.text = `${n} x ${c} = ${n*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c++
       }*/