function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector(`div#res`) //essa linha buscou a informação na segunda div

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados do ano e tente novamente!`)
    }
    else {
        var fsex = document.getElementsByName('rasex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fmenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fadolecenteMenino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'fsenhor.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fbebeMenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fadolecenteMenina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','fadulta.png')
            } else {
                //idoso
                img.setAttribute('src','fsenhora.png')
            }
        }
            
        res.getElementsByClassName.texAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}