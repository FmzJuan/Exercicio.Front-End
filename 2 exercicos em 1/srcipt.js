function calculate() { // Espaço entre o () { para melhor identação - Nome do método em inglês
    // coletando dados
    
    // Identação let var = wind..  (os espaços entre o nome da variável e o = e a continuação
    let num = window.document.getElementById('txtnu'); // Essa div não existe no Index
    let tab = window.document.getElementById('seltab'); // Essa div não existe no Index

    // transformando strings em numbers
    let n = Number(num.value);

    // verificando
    if (n == 0) { // Espaços
        alert("[erro-tabuada] preencha os dados"); // ; no final (mesmo que no JS não é obrigatório, todo mundo põe para melhor identação
    } else { // Espaço no } else {
        tab.innerHTML = ""; // Espaço pro = e ; no final
        for (let c=0; c <= 10; c++) { // Espaços pra melhor identação e visualização
            let item = document.createElement('option');
            item.text = `${n}x ${c} = ${n*c}`;
            tab.appendChild(item);
        }
    }
}

function count() { // Nome da função em inglês
    //coletando dados
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let saida= window.document.getElementById('saida');

    //transformando strings em numbers
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    //verificando
    if (i == 0 || f == 0 || p == 0) {
        alert('[erro-contagem] preencha os dados')
    } else if (i < f) {
        //do menor para o maior
        saida.innerHTML=''
        for (let c=i; c <= f; c += p) {
            saida.innerHTML +=`\u{1F449}${c}`;
        }
    } else {
        //do maior para o menor
        saida.innerHTML = '';
        for (let c=i; c >= f; c-= p) {
            saida.innerHTML +=`\u{1F449}${c}`;
        }
    }
    saida.innerHTML += `    <BR>FIM:\u{1F60E}`;
}
