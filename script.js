const newsletters = [
  {
    title: "Edição 03 - Quarta",
    date: "21/05/2025",
    file: "edicoes/21_05.md",
    image: "imagens/backs/21_05.jpg"
  },
  {
    title: "Edição 02 - Segunda",
    date: "19/05/2025",
    file: "edicoes/19_05.md",
    image: "imagens/backs/19_05.jpg"
  },
  {
    title: "Edição 01 - Boas-vindas",
    date: "16/05/2025",
    file: "edicoes/16_05.md",
    image: "imagens/backs/16_05.jpg"
  }
];

const listEl = document.getElementById("newsletter-list");
const viewEl = document.getElementById("newsletter-view");
const contentEl = document.getElementById("newsletter-content");

function mostrarLista() {
  viewEl.style.display = "none";
  listEl.style.display = "grid";
}

function voltar() {
  mostrarLista();
}

function mostrarEdicao(newsletter) {
  fetch(newsletter.file)
    .then((res) => res.text())
    .then((md) => {
      contentEl.innerHTML = marked.parse(md);
      listEl.style.display = "none";
      viewEl.style.display = "block";
    });
}

newsletters.forEach((newsletter) => {
  const li = document.createElement("li");
  li.className = "card";
  li.style.backgroundImage = `url(${newsletter.image})`;

  li.innerHTML = `
    <div class="card-content">
      <h3>${newsletter.title}</h3>
      <p>${newsletter.date}</p>
    </div>
  `;

  li.onclick = () => mostrarEdicao(newsletter);
  listEl.appendChild(li);
});

//mostrar os participantes
function mostrarParticipantes() {
  document.getElementById("modal-participantes").style.display = "flex";
}

function fecharParticipantes() {
  document.getElementById("modal-participantes").style.display = "none";
}