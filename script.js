import bc from "./data/data.json" assert { type: "json" };

const botaoDetalhes = document.getElementsByClassName("botaoDetalhes");

for (let i = 0; i < botaoDetalhes.length; i++) {
	botaoDetalhes[i].addEventListener("click", () => {
        alert(bc.data[i])
    });
}
