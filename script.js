const newsletters = [
  {
    title: "Edição 01 - Boas-vindas",
    date: "06/04/2025",
    file: "./edicoes/00_04.md",
    image: "./imagens/backs/bg1.png"
  },
  {
    title: "Edição 02 - Novidades de Abril",
    date: "13/04/2025",
    file: "./edicoes/01_04.md",
    image: "./imagens/backs/bg2.png"
  },
  {
    title: "Edição 03 - Testando mais um",
    date: "20/04/2025",
    file: "./edicoes/02_04.md",
    image: "./imagens/bg3.jpg"
  },
  {
    title: "Edição 04 - Testando mais um",
    date: "23/04/2025",
    file: "./edicoes/02_04.md",
    image: "./imagens/bg3.jpg"
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

//Fazer uma limpa nesse código e deixar ele o mais sucinto e autoexplicativo possível