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

    let item = document.createElement("li");
    let texto = document.createTextNode(listar[listar.length - 1]);
    let botao = document.createElement("button");
    botao.innerText = '🗑️';
    botao.onclick = () => {
        item.style.display = "none";
    }
          
    item.appendChild(texto);
    item.appendChild(botao);
    lista.appendChild(item);
}
