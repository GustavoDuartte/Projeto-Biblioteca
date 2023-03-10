const uri = "http://localhost:3000/livro";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = {
    titulo: form.titulo.value,
    autor: form.autor.value,
    preco: form.preco.value,
    data_emprestado: form.data_emprestado.value,
    data_prev_dev: form.data_prev_dev.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  options.body = JSON.stringify(body);

  fetch(uri + "/create", options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 201) window.location.reload();
      else alert("Erro ao enviar dados");
    });
});