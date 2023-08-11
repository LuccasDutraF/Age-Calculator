function Calcular(){
    var dia = window.document.getElementById("input-dia")
    var mes = window.document.getElementById("input-mes")
    var anoE = window.document.getElementById("input-ano")
    var res_ano = window.document.getElementById("Res-ano")
    var res_mes = window.document.getElementById("Res-mes")
    var res_dia = window.document.getElementById("Res-dia")
    /* Código do ano */
    var ano_inserido = Number(anoE.value)
    var ano_programado = new Date().getFullYear()
    var calculo_ano = ano_programado - ano_inserido

    /* Código do mes */
    var mes_inserido = Number(mes.value)
    var mes_programado = new Date().getMonth()
    
    /* Código do dia */
    var dia_inserido = Number(dia.value)
    var dia_programado = new Date().getDate()
    
    
    /* Dia */

    if(dia_inserido >31){
        ERRO_DIA.innerHTML = ("Must be a valid day")
        dia.style.borderColor = "red"
        res_dia.innerHTML = ("--")
        DAY.style.color = "red"
    }else if( dia.value.length == 0){
        dia.style.borderColor = "red"
        res_dia.innerHTML = ("--")
        DAY.style.color = "red"
        ERRO_DIA.innerHTML = ("The Field is required")
    }else{
        res_dia.innerHTML = (dia_programado)
        dia.style.borderColor = "rgb(219, 219, 219"
        DAY.style.color = "black"
        ERRO_DIA.innerHTML = ("")

    }
    
    /* Mes */

    if(mes_inserido > 11 ){
        ERRO_MES.innerHTML = ("Must be a valid month")
        mes.style.borderColor = "red"
        res_mes.innerHTML = ("--")
        MES.style.color = "red"
    }else if( mes.value.length == 0){
        mes.style.borderColor = "red"
        res_mes.innerHTML = ("--")
        MES.style.color = "red"
        ERRO_MES.innerHTML = ("The Field is required")
    }else{
        res_mes.innerHTML = (mes_programado + 1)
        mes.style.borderColor = "rgb(219, 219, 219"
        MES.style.color = "black"
        ERRO_MES.innerHTML = ("")
    }
    
    /* Ano */

    if(ano_inserido >= 2023){
            ERRO_ANO.innerHTML = ("Must be in the past")
            anoE.style.borderColor = "red"
            res_ano.innerHTML = ("--")
            ano.style.color = "red"
    }else if (anoE.value.length == 0){
            res_ano.innerHTML = ("--")
            anoE.style.borderColor = "red"
            ano.style.color = "red"
            ERRO_ANO.innerHTML = ("The Field is required")
    }else if( ano_inserido <1500){
        window.alert ("[ERRO] Porfavor verifique as informações que você inseriu.")
        anoE.style.borderColor = "red"
        res_ano.innerHTML = ("--")
        ano.style.color = "red"
    } else{
            res_ano.innerHTML = (calculo_ano)
            anoE.style.borderColor = "rgb(219, 219, 219"
            ano.style.color = "black"
            ERRO_ANO.innerHTML = ("")

    }

    if(mes_programado >= mes_inserido){
        res_ano.innerHTML = (calculo_ano)
    }else if(mes_inserido > mes_programado){
        res_ano.innerHTML = (calculo_ano -1 )
    }

    



}