const listaSalva = localStorage.getItem("@listagem_tarefas");
const tarefas = listaSalva ? JSON.parse(listaSalva) : [];

const tableBody = document.querySelector("#task-table tbody");

function atualizarTabela() {
    tableBody.innerHTML = ""; // Limpa a tabela

    tarefas.forEach((item, index) => {
        const row = document.createElement("tr");

        // Coluna da tarefa
        const cellTarefa = document.createElement("td");
        cellTarefa.textContent = item;

        // Coluna das ações
        const cellAcoes = document.createElement("td");

        // Botão "Excluir"
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => excluirTarefa(index);
        btnExcluir.style.marginRight = "10px"; // Espaçamento entre os botões

        // Botão "Modificar"
        const btnModificar = document.createElement("button");
        btnModificar.textContent = "Modificar";
        btnModificar.onclick = () => modificarTarefa(index);

        // Adiciona os botões à célula
        cellAcoes.appendChild(btnExcluir);
        cellAcoes.appendChild(btnModificar);

        // Adiciona as células à linha
        row.appendChild(cellTarefa);
        row.appendChild(cellAcoes);

        // Adiciona a linha ao corpo da tabela
        tableBody.appendChild(row);
    });
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
    atualizarTabela();
}

function modificarTarefa(index) {
    const novoTexto = prompt("Digite o novo texto para a tarefa:", tarefas[index]);
    if (novoTexto !== null && novoTexto.trim() !== "") {
        tarefas[index] = novoTexto.trim();
        localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
        atualizarTabela();
    }
}

// Inicializa a tabela
atualizarTabela();

