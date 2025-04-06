const newsletters = [
  {
    title: "Edição 01 - Boas-vindas (06/04)",
    file: "./edicoes/00_04.md",
  },
  {
    title: "Edição 02 - Novidades de Abril",
    file: "./edicoes/01_04.md",
  },
  {
    title: "Edição 03 - Testando mais um",
    file: "./edicoes/02_04.md",
  },
];

const listEl = document.getElementById("newsletter-list");
const viewEl = document.getElementById("newsletter-view");
const contentEl = document.getElementById("newsletter-content");

function mostrarLista() {
  viewEl.style.display = "none";
  listEl.style.display = "block";
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

// Gera lista de edições
newsletters.forEach((newsletter) => {
  const li = document.createElement("li");
  li.textContent = newsletter.title;
  li.onclick = () => mostrarEdicao(newsletter);
  listEl.appendChild(li);
});
