function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Revise seus dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menino - 300.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem homem - 300.jpg')
            } else {
                img.setAttribute('src', 'img/homem adulto - 300.jpg')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menina - 300.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem mulher - 300.jpg')
            } else {
                img.setAttribute('src', 'img/mulher adulta - 300.jpg')
            } 
        }
        res.style.textAlign = 'center'
        img.style.borderRadius = '50%'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}