
import { criaCard } from "./criaCardLista.js"
import { ordenaLista } from "./ordenaLista.js"

class RequestApi{

    static url     = "https://kenzie-olympics.herokuapp.com/paises"
    static headers = {"Content-Type": "application/json"}

    static async PegaInformacao(){

        const infoPaises = await fetch(`${this.url}`,{

            method: "GET",
            headers: this.headers

        })
        .then(resp => resp.json())
        .then(resp => {

            const tabela = document.querySelector(".listaInformacoes")

            const lista = ordenaLista(resp)

            lista.forEach((elem,i) => {

                tabela.appendChild(criaCard(i + 1, elem))

            })
            
        })
        .catch(err => console.log(err))

        return infoPaises

    }
    

}

export {RequestApi}

RequestApi.PegaInformacao()