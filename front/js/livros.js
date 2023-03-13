const uri = "http://localhost:3000/livro";
const corpo = document.querySelector("#corpo");

fetch(uri + "/read", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");
    let col8 = document.createElement("td");
    let col9 = document.createElement("td");

    let ed = document.createElement("button");
    ed.className = "bottone5";
    ed.innerHTML = "Editar";

    ed.addEventListener("click", () => {
      window.location.href = "../pages/editLivro.html";
    });

    let del = document.createElement("button");
    del.className = "bottone5";
    del.innerHTML = "Deletar";
    del.setAttribute("onclick", `excluirItem('${e.id}')`);

    col1.innerHTML = e.id;
    col2.innerHTML = e.titulo;
    col3.innerHTML = e.autor;
    col5.innerHTML = formatarData(e.data_emprestado);
    col6.innerHTML = formatarData(e.data_devolucao);
    col7.innerHTML = e.nome_cliente;

    col8.appendChild(ed);
    col9.appendChild(del);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col5);
    linha.appendChild(col6);
    linha.appendChild(col7);

    linha.appendChild(col8);
    linha.appendChild(col9);

    corpo.appendChild(linha);
  });
}

function excluirItem(i) {
  if (confirm("Excluido"))
    fetch(uri + "/delete/" + i, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 204) window.location.reload();
        else alert("Erro ao enviar dados");
      });
}

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
