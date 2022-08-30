import { criaCard } from "./criaCardLista.js"
import { RequestApi } from "./Request.js"

const formPesquisa = document.querySelector("form")
const tabela       = document.querySelector(".listaInformacoes")
const inputValue   = document.querySelector("input")
const mensagemErro = document.querySelector(".mensagemErro")



const filtroPesquisa = async () => {

    formPesquisa.addEventListener("click", async (event) => {

    
        if(event.target.tagName == "BUTTON"){

            const api = await fetch(`${RequestApi.url}`, {

                method: "GET",
                headers: RequestApi.headers

            })
            .then(resp => resp.json())
            .then(resp => {

                resp.forEach(element => {

                    let nomePaisFormatado     = element.country.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    let nomePesquisaFormatado = inputValue.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

                    let {id,country, flag_url, medal_bronze, medal_gold, medal_silver} = element

                        let totalMedal = medal_bronze + medal_gold + medal_silver

                        const paisesFormatado = {

                            pais: country,
                            bandeira: flag_url,
                            ouro: medal_gold,
                            prata: medal_silver,
                            bronze: medal_bronze,
                            totalMedalhas: totalMedal

                        }

                    if(nomePaisFormatado == nomePesquisaFormatado){

                        mensagemErro.classList.add("hidden")

                        tabela.innerHTML = ""

                        tabela.appendChild(criaCard(id, paisesFormatado))

                        mensagemErro.innerText = ""
                       
                    }else if(nomePesquisaFormatado === "todos"){

                        mensagemErro.innerText = ""

                        console.log(paisesFormatado)

                        tabela.appendChild(criaCard(id, paisesFormatado))


                    }else{

                        mensagemErro.innerText = "nome inavlido"

                    }

                })

            })
            .catch(err => console.log(err))
            return api

        }    
            
    })

}

filtroPesquisa()



