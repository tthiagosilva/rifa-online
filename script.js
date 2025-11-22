const container = document.getElementById("numeros-container");
const valorTotal = document.getElementById("valorTotal");
const precoPorNumero = 20;
let numerosSelecionados = [];

for (let i = 1; i <= 200; i++) {
  const btn = document.createElement("button");
  btn.textContent = i.toString().padStart(3, '0');
  btn.addEventListener("click", () => toggleSelecionado(btn, i));
  container.appendChild(btn);
}

function toggleSelecionado(btn, numero) {
  const index = numerosSelecionados.indexOf(numero);
  if (index === -1) {
    numerosSelecionados.push(numero);
    btn.classList.add("selecionado");
  } else {
    numerosSelecionados.splice(index, 1);
    btn.classList.remove("selecionado");
  }
  atualizarTotal();
}

function atualizarTotal() {
  const total = numerosSelecionados.length * precoPorNumero;
  valorTotal.textContent = `R$${total.toFixed(2).replace(".", ",")}`;
}

function copiarPix() {
  const input = document.getElementById("pixKey");
  input.select();
  input.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");

  alert("Chave Pix copiada!");
}
