let amigos = [];

document
  .getElementById("adicionar")
  .addEventListener("click", adicionarAmigo);

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value.trim();

  if (amigo === "") {
    alert("Por favor, digite o nome do amigo.");
    return;
  }

  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  atualizarLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo foi adicionado.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById("resultado").innerHTML =
    "Amigo sorteado: " + amigoSorteado;
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach(function (amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}
