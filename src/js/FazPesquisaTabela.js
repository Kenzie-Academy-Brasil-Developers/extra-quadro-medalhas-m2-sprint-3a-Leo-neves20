import { criaCard } from "./criaCardLista.js"
import { ordenaLista } from "./ordenaLista.js"
import { RequestApi } from "./Request.js"

const formPesquisa = document.querySelector("form")
const tabela       = document.querySelector(".listaInformacoes")
const inputValue   = document.querySelector("input")
const mensagemErro = document.getElementById("mensagemErr")

const filtroPesquisa = async () => {

    formPesquisa.addEventListener("click", async (event) => {

        if(event.target.tagName == "BUTTON"){

            tabela.innerHTML = ""

            const api = await fetch(`${RequestApi.url}`, {

                method: "GET",
                headers: RequestApi.headers

            })
            .then(resp => resp.json())
            .then(resp => {

                const listaPaises = ordenaLista(resp)

                let nomePesquisaFormatado = inputValue.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

                const buscaNomePaises = listaPaises.filter((element, i) => {

                    let nomePaisFormatado = element.pais.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

                    if(nomePaisFormatado == nomePesquisaFormatado){

                        mensagemErro.classList.add("hidden")
                        tabela.append(criaCard(i + 1, element))

                        return element

                    }
                        
                })

                if(buscaNomePaises.length == 0){

                    mensagemErro.classList.remove("hidden")

                }

                const bustaTodosPises = listaPaises.forEach((element, i) => {

                    if(nomePesquisaFormatado == "todos"){

                        tabela.append(criaCard(i + 1, element))

                    }

                })

            })
            .catch(err => console.log(err))
            return api

        }    
            
    })

}

filtroPesquisa()



