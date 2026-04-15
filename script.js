const produtos = [
  { nome: "Meia de Poliamida", imagem: "meia-de-poliamida.png" },
  { nome: "Pochete", imagem: "pochete.png" },
  { nome: "Garrafa Dobrável", imagem: "garrafa-dobravel.png" },
  { nome: "Squeeze de Corrida", imagem: "squeeze-de-corrida.png" },
  { nome: "Eletrólito", imagem: "eletrolito.png" },
  { nome: "Camisa Além do Pace", imagem: "camisa-alem-do-pace.png" },
  { nome: "Lanterna Portátil", imagem: "lanterna-portatil.png" },
  { nome: "Óculos Baixa Pace", imagem: "oculos-baixa-pace.png" }
];

const container = document.getElementById("produtos");

produtos.forEach(produto => {
  container.innerHTML += `
    <div class="card">
      <img src="${produto.imagem}?v=3">
      <h3>${produto.nome}</h3>
      <button onclick="comprar('${produto.nome}')">Comprar</button>
    </div>
  `;
});

function comprar(produto){
  let numero="5532999743969";
  let msg=`Olá tenho interesse no produto "${produto}"`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,'_blank');
}

function abrirWhatsApp(){
  let numero="5532999743969";
  window.open(`https://wa.me/${numero}`,'_blank');
}

function scrollProdutos() {
  const titulo = document.getElementById("titulo-produtos");

  const y = titulo.getBoundingClientRect().top + window.pageYOffset - 80;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

// animação ao rolar
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    let top=card.getBoundingClientRect().top;
    if(top<window.innerHeight-50){card.classList.add("show");}
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("ativo");
}
