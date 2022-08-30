 
 export function ordenaLista(arr){

    const arrOrdenado = []

    arr.forEach(element => {

        let {country, flag_url, medal_bronze, medal_gold, medal_silver} = element

        let totalMedal = medal_bronze + medal_gold + medal_silver

        const paisesFormatado = {

            pais: country,
            bandeira: flag_url,
            ouro: medal_gold,
            prata: medal_silver,
            bronze: medal_bronze,
            totalMedalhas: totalMedal

        }

        arrOrdenado.push(paisesFormatado)
    
    })

    arrOrdenado.sort((a,b) => b.totalMedalhas - a.totalMedalhas)

    arrOrdenado.sort((a,b) => {

        if(a.totalMedalhas === b.totalMedalhas){

            return b.ouro - a.ouro

        }

    })

    return arrOrdenado

 }

    

    

    

    
    

 



