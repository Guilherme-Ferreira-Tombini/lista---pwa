// window.onload = () => {
//     "use strict";
//     if("serviceWorker" in navigator){
//         navigator.serviceWorker.register("./sw.js");
//     }
// };

let listar = [];

function tarefas(){
    let atividade = document.getElementById('atividade').value;
    listar.push(atividade);


    for(let tarefa of leta) {
        let item = document.createElement("li");
        let texto = document.createTextNode(tarefa + ' - ');
        let botao = document.createElement("button");
        botao.innerText = '🗑️';
          
        item.appendChild(texto);
        item.appendChild(botao);
        lista.appendChild(item);
    }

}
