function carregar(){
    var msg = window.document.getElementById('msg')
    var status = window.document.getElementById('status')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas e ${minut} minutos.`
    if (hora >= 0 && hora < 12 ){
        //BOM DIA!!
        status.innerHTML = `BOM DIA!!`
        img.src = 'fotomanha.png'
        document.body.style.background = '#e1b05c' 
    }else if (hora >=12 && hora < 18){
        //BOA TARDE!!
        status.innerHTML = `BOA TARDE!!`
        img.src = 'fototarde.png'
        document.body.style.background = '#c8722c'
    }else {
        //BOA NOITE!!
        status.innerHTML = `BOA NOITE!!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#242424'
    }
}

