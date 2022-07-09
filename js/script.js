function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

        msg.innerHTML = `Agora são: ${hora} Horas e ${minutos} Minutos.`

            if (hora >= 0 && hora <= 12) {
                img.src = "./img/nascerSol.jpg"
                document.body.style.background = "#cdd118"
            } else if (hora > 13 && hora <= 18) {
                img.src = "./img/tarde.jpg"
                document.body.style.background = "#349532"
            } else {
                img.src = "./img/noite.jpg"
                document.body.style.background = "#1b1b15"
            }

}