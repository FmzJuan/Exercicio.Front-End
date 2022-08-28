function calcular(){
    //coletando dados
    let num= window.document.getElementById('txtnu')
    let tab=window.document.getElementById('seltab')
    //transformando strings em numbers
    let n = Number(num.value)
    //verificando
    if(n == 0){
        alert("[erro-tabuada] preencha os dados")
    }else{
        tab.innerHTML= ""
        for(let c=0;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n}x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

}
function contar(){
    //coletando dados
    let inicio = window.document.getElementById('inicio')
    let fim =window.document.getElementById('fim')
    let passo =window.document.getElementById('passo')
    let saida=window.document.getElementById('saida')

    //transformando strings em numbers
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    //verificando
    if(i == 0 || f == 0 || p == 0){
        alert('[erro-contagem] preencha os dados')
    }else if(i<f){
        //do menor para o maior
        saida.innerHTML=''
        for(let c=i;c<=f;c+=p){
            saida.innerHTML +=`\u{1F449}${c}`
        }
    }else{
        //do maior para o menor
        saida.innerHTML=''
        for(let c=i;c>=f;c-=p){
            saida.innerHTML +=`\u{1F449}${c}`
        }
    }
saida.innerHTML +=`    <BR>FIM:\u{1F60E}`
}
