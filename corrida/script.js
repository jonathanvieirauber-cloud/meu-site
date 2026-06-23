const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const btnBaixar = document.getElementById("baixar");

let popup;
let fecharPopup;

window.addEventListener("DOMContentLoaded", () => {

    popup = document.getElementById("popup-instagram");
    fecharPopup = document.getElementById("fechar-popup");

    fecharPopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

});
const moldura = new Image();
moldura.src = "moldura.png";

upload.addEventListener("change", function(e){

const arquivo = e.target.files[0];

if(!arquivo) return;

const leitor = new FileReader();

leitor.onload = function(event){

const foto = new Image();

foto.onload = function(){

canvas.width = 1080;
canvas.height = 1080;

ctx.drawImage(
foto,
0,
0,
1080,
1080
);

btnBaixar.style.display = "inline-block";

ctx.drawImage(
moldura,
0,
0,
1080,
1080
);

}

foto.src = event.target.result;

}

leitor.readAsDataURL(arquivo);

}); 

document
.getElementById("baixar")
.addEventListener("click", () => {

    const link = document.createElement("a");

    link.download = "eu-vou-corrida.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

    setTimeout(() => {
        popup.style.display = "flex";
    }, 500);

});

fecharPopup.addEventListener("click", () => {
    popup.style.display = "none";
});
