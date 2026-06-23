const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const btnBaixar = document.getElementById("baixar");

const moldura = new Image();
moldura.src = "moldura.png";

let imagemGerada = null;

upload.addEventListener("change", function (e) {

    const arquivo = e.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (event) {

        const foto = new Image();

        foto.onload = function () {

            // 🔥 NOVO TAMANHO (STORIES)
            canvas.width = 1080;
            canvas.height = 1920;

            const canvasWidth = 1080;
            const canvasHeight = 1920;

            const escala = Math.max(
                canvasWidth / foto.width,
                canvasHeight / foto.height
            );

            const novaLargura = foto.width * escala;
            const novaAltura = foto.height * escala;

            const x = (canvasWidth - novaLargura) / 2;
            const y = (canvasHeight - novaAltura) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // FOTO
            ctx.drawImage(
                foto,
                x,
                y,
                novaLargura,
                novaAltura
            );

            // MOLDE
            ctx.drawImage(
                moldura,
                0,
                0,
                1080,
                1920
            );

            btnBaixar.style.display = "inline-block";

            imagemGerada = canvas.toDataURL("image/png");
        };

        foto.src = event.target.result;
    };

    leitor.readAsDataURL(arquivo);
});

btnBaixar.addEventListener("click", () => {

    imagemGerada = canvas.toDataURL("image/png");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {

        const novaAba = window.open();

        novaAba.document.write(`
            <title>Baixar imagem</title>

            <h2 style="text-align:center;font-family:sans-serif;">
                Baixar sua imagem
            </h2>

            <p style="text-align:center;font-family:sans-serif;">
                Clique no botão abaixo para salvar
            </p>

            <img src="${imagemGerada}" 
                 style="width:100%;max-width:400px;display:block;margin:auto;" />

            <div style="text-align:center;margin-top:20px;">
                <a href="${imagemGerada}" download="eu-vou-corrida.png"
                style="padding:12px 20px;background:#22c55e;color:#fff;text-decoration:none;border-radius:10px;font-family:sans-serif;">
                    Baixar imagem
                </a>
            </div>
        `);

    } else {

        const link = document.createElement("a");
        link.href = imagemGerada;
        link.download = "eu-vou-corrida.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});