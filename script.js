const produtos = [
  "Meia de Poliamida",
  "Pochete",
  "Garrafa Dobrável",
  "Squeeze de Corrida",
  "Eletrólito",
  "Camisa Além do Pace",
  "Lanterna Portátil",
  "Óculos Baixa Pace"
];

const container = document.getElementById("produtos");

produtos.forEach(nome => {
  container.innerHTML += `
    <div class="card">
      <img src="${nome.toLowerCase().replace(/ /g,'-')}.png">
      <h3>${nome}</h3>
      <button onclick="comprar('${nome}')">Comprar</button>
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
