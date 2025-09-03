
let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); 

  
  if (nombre === "") {
    alert("⚠️ Por favor escribe un nombre válido.");
    return;
  }

  
  if (listaAmigos.includes(nombre)) {
    alert(`⚠️ El nombre "${nombre}" ya fue agregado.`);
    return;
  }

  listaAmigos.push(nombre);

  
  actualizarLista();

  
  input.value = "";
}

function actualizarLista() {
  const amigos = document.getElementById("listaAmigos");
  amigos.innerHTML = "";

  listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    amigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Agrega al menos 2 amigos para sortear.");
    return;
  }

  
  const indice = Math.floor(Math.random() * listaAmigos.length);
  const elegido = listaAmigos[indice];

  
  listaAmigos.length = 0; 

  
  document.getElementById("listaAmigos").innerHTML = "";

  const amigos = document.getElementById("resultado");
  amigos.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = ` El amigo secreto es: ${elegido}`;
  amigos.appendChild(li);
}
