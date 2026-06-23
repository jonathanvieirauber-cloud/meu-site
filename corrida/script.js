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

            canvas.width = 1080;
            canvas.height = 1920;

            const w = 1080;
            const h = 1920;

            const escala = Math.max(
                w / foto.width,
                h / foto.height
            );

            const novaLargura = foto.width * escala;
            const novaAltura = foto.height * escala;

            const x = (w - novaLargura) / 2;
            const y = (h - novaAltura) / 2;

            ctx.clearRect(0, 0, w, h);

            ctx.drawImage(foto, x, y, novaLargura, novaAltura);

            ctx.drawImage(moldura, 0, 0, w, h);

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
            <title>Salvar imagem</title>

            <div style="font-family:Arial;text-align:center;padding:20px;">

                <h2>Imagem pronta para salvar</h2>

                <p style="color:#555;font-size:16px;line-height:1.5;">
                    Para salvar sua imagem, pressione e segure sobre ela e selecione a opção <b>"Salvar imagem"</b> no seu dispositivo.
                </p>

                <img src="${imagemGerada}"
                    style="width:100%;max-width:400px;border-radius:12px;margin-top:10px;" />
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