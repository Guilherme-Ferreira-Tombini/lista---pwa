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
    document.getElementById("lista").innerHTML = listar;
    console.log(listar);
}
