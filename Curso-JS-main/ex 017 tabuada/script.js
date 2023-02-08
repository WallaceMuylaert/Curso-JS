function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var res = document.getElementById('res');
    var tabuada ='';

    for(var count=1;count<=10;count++)
    tabuada += num+"x"+count+ "=" +
                num*count+"<br/>"
    
    res.innerHTML = tabuada
}