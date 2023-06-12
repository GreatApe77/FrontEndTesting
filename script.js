
import  DATA  from "./data/data.json" assert {type: "json"};

const descricoes = DATA.descricoes

function renderContainer(index, textContent) {

    //setar a div maior

    const fotoContainer = document.createElement("div")
    fotoContainer.className = "fotoContainer"
    //setar a imagem
    const image = document.createElement("img")
    image.className = "imagem"
    image.src = `./img/${index+1}.jpg`

    //setar o paragrafo

    const paragrafo = document.createElement("p")
    paragrafo.className = "descricao"


    paragrafo.textContent = textContent[index] || ""
    paragrafo.style.display = "none"
    //renderizar o botao

    const mostrarDetalhesBtn = document.createElement("button")
    let ativado = false
    mostrarDetalhesBtn.textContent = "Mostrar Detalhes"
    mostrarDetalhesBtn.id = "mostrarDetalhesBtn"
    mostrarDetalhesBtn.className = "botao"
    mostrarDetalhesBtn.addEventListener("click", () => {

        if (ativado) {
            paragrafo.style.display = "none"
            ativado = false
        } else {
            paragrafo.style.display = "block"
            ativado = true
        }
    })
    fotoContainer.appendChild(image)
    fotoContainer.appendChild(mostrarDetalhesBtn)
    fotoContainer.appendChild(paragrafo)
    return fotoContainer
}


for (let i = 0; i < 10; i++) {

    document.getElementById("mainContainer").appendChild(renderContainer(i, descricoes))

}