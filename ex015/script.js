function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector(`div#res`) //essa linha buscou a informação na segunda div

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert (`[ERRO] Verifique os dados do ano e tente novamente!`)
    }
    else{
       var fsex = document.getElementsByName(`radsex`)
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada é ${idade}`
    }
}