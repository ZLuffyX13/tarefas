
let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_tarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

function listarTarefas() {
  listElement.innerHTML = ""; // Limpa a lista

  if (tarefas.length > 0) {
    // Exibe apenas o último item
    const ultimoItem = tarefas[tarefas.length - 1];
    const todoElement = document.createElement("li");
    const tarefaText = document.createTextNode(ultimoItem);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    // Configura o botão para excluir o último item
    linkElement.setAttribute("onclick", `deletarTarefa(${tarefas.length - 1})`);
    linkElement.setAttribute("class", "delete");

    const linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(tarefaText);
    listElement.appendChild(todoElement);
  }
}

listarTarefas();


function adicionarTarefa() {
  if(inputElement.value === ""){
    alert("Digite alguma tarefa!")
    return false;
  }else{

    let tarefaDigitada: string = inputElement.value;
    tarefas.push(tarefaDigitada);
    
    inputElement.value = "";
    listarTarefas();
    salvarDados();

  }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(posicao: number){
  tarefas.splice(posicao, 1);

  listarTarefas();
  salvarDados();

}

function salvarDados(){
  localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas))
}


