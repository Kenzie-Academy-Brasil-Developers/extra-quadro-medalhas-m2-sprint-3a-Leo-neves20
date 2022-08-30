
export const criaCard = (posi,element) => {

    const linha        = document.createElement("tr")
    const posicao      = document.createElement("td")
    const bandeiraPais = document.createElement("img")
    const pais         = document.createElement("td")
    const ouro         = document.createElement("td")
    const prata        = document.createElement("td")
    const bronze       = document.createElement("td")
    const total        = document.createElement("td")

    linha.id = element.pais
    posicao.classList.add("posicaoTabela")
    bandeiraPais.classList.add("bandeiraPais")
    pais.classList.add("PaisTabela")
    ouro.classList.add("medalhasTabela")
    prata.classList.add("medalhasTabela")
    bronze.classList.add("medalhasTabela")
    total.classList.add("totalTabela")

    posicao.innerText = `${posi}º`
    bandeiraPais.src  = element.bandeira
    bandeiraPais.alt  = `bandeira do(a) ${element.pais} `
    pais.innerText    = element.pais
    ouro.innerText    = element.ouro
    prata.innerText   = element.prata
    bronze.innerText  = element.bronze
    total.innerText   = element.totalMedalhas

    pais.appendChild(bandeiraPais)
    linha.append(posicao, pais, ouro, prata, bronze, total)
    
    return linha

}
