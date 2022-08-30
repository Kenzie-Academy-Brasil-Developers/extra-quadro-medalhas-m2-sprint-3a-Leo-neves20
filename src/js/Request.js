import { criaCard } from "./criaCardLista.js"

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

            resp.forEach(element => {

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

                tabela.appendChild(criaCard(id, paisesFormatado))

                return resp

            })

        })
        .catch(err => console.log(err))

        return infoPaises

    }
    

}

export {RequestApi}

RequestApi.PegaInformacao()