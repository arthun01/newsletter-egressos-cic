fetch("edicoes.json")
  .then((res) => res.json())
  .then((newsletters) => {
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
  });


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