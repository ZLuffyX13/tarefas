"use strict";
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listaSalva = localStorage.getItem("@listagem_tarefas");
var tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = ""; // Limpa a lista
    if (tarefas.length > 0) {
        // Exibe apenas o último item
        var ultimoItem = tarefas[tarefas.length - 1];
        var todoElement = document.createElement("li");
        var tarefaText = document.createTextNode(ultimoItem);
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        // Configura o botão para excluir o último item
        linkElement.setAttribute("onclick", "deletarTarefa(".concat(tarefas.length - 1, ")"));
        linkElement.setAttribute("class", "delete");
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        listElement.appendChild(todoElement);
    }
}
listarTarefas();
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        var tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    salvarDados();
}
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
