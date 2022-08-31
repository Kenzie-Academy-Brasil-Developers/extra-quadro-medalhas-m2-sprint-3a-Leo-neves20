
import { criaCard } from "./criaCardLista.js"
import { EventosBtnTabela } from "./eventoBtnTabela.js"

import { ordenaLista } from "./ordenaLista.js"

class RequestApi{

    static url     = "https://kenzie-olympics.herokuapp.com/paises"
    static headers = {"Content-Type": "application/json"}


    static async RenderizaLista(){

        const infoPaises = await fetch(`${this.url}`,{

            method: "GET",
            headers: this.headers

        })
        .then(resp => resp.json())
        .then((resp) => {

            const tabela          = document.querySelector(".listaInformacoes")
            const cabecalhoTabela = document.getElementById("headerTabela")
            const btnPosicao      = document.getElementById("posicao")
            const btnOuro         = document.getElementById("ouro")
            const btnPrata        = document.getElementById("prata")
            const btnBronze       = document.getElementById("bronze")
            
            let statusPosicao = false          
            let statusOuro    = false
            let statusPrata   = false
            let statusBronze  = false

            const lista = ordenaLista(resp)

            lista.forEach(element => {

                tabela.append(criaCard(element))

            })

            cabecalhoTabela.addEventListener("click", (event) => {

                if(event.target.id == "posicao" && statusPosicao == false){

                    statusPosicao = true

                    tabela.innerHTML     = ""
                    btnPosicao.innerText = "Posição ^"

                    const listaOrdenada = EventosBtnTabela.paisMaior(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element)) })

                }else if(event.target.id == "posicao" && statusPosicao == true){

                    statusPosicao = false

                    tabela.innerHTML     = ""
                    btnPosicao.innerText = "Posição v"

                    const listaOrdenada = EventosBtnTabela.paisMenor(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element))})

                }
//---------------------------------- BTN OURO --------------------------------------------------
                else if(event.target.id == "ouro" && statusOuro == false){

                    statusOuro = true

                    tabela.innerHTML  = ""
                    btnOuro.innerText = "Ouro ^"

                    const listaOrdenada = EventosBtnTabela.ouroMaior(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element)) })

                }else if(event.target.id == "ouro" && statusOuro == true){

                    statusOuro = false

                    tabela.innerHTML = ""
                    btnOuro.innerText = "Ouro v"

                    const listaOrdenada = EventosBtnTabela.ouroMenor(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element))})

                }
//------------------------------------- BTN PRATA ---------------------------------------------------
                else if(event.target.id == "prata" && statusPrata == false){

                    statusPrata = true

                    tabela.innerHTML   = ""
                    btnPrata.innerText = "Prata ^"

                    const listaOrdenada = EventosBtnTabela.prataMaior(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element)) })

                }else if(event.target.id == "prata" && statusPrata == true){

                    statusPrata = false

                    tabela.innerHTML   = ""
                    btnPrata.innerText = "Prata v"

                    const listaOrdenada = EventosBtnTabela.prataMenor(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element))})

                }
//--------------------------------------- BTN BRONZE -----------------------------------------------------
                else if(event.target.id == "bronze" && statusBronze == false){

                    statusBronze = true

                    tabela.innerHTML    = ""
                    btnBronze.innerText = "Bronze ^"

                    const listaOrdenada = EventosBtnTabela.bronzeMaior(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element)) })

                }else if(event.target.id == "bronze" && statusBronze == true){

                    statusBronze = false

                    tabela.innerHTML = ""
                    btnBronze.innerText = "Bronze v"

                    const listaOrdenada = EventosBtnTabela.bronzeMenor(lista)

                    listaOrdenada.forEach(element => {tabela.append(criaCard(element))})

                }
        
            })
            
        })
        .catch(err => console.log(err))

        return infoPaises

    }

    static renderizaPorPosicao(){

        console.log(this.RenderizaLista())

    }
    
}

export {RequestApi}

RequestApi.RenderizaLista()

