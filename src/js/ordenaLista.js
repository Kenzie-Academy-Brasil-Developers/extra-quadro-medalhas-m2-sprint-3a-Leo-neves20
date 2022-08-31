 
function ordenaLista(arr){

    const arrOrdenado  = []
    const arrFormatado = []

    arr.forEach((element) => {

        let {medal_bronze,  medal_gold, medal_silver} = element
        let totalMedal = medal_bronze + medal_gold + medal_silver

        element.totalMedalhas = totalMedal

        arrOrdenado.push(element)

    })

    arrOrdenado.forEach((element) => {

        let {country, flag_url, medal_bronze, medal_gold, medal_silver, totalMedalhas} = element

        const paisesFormatado = {

            pais: country,
            bandeira: flag_url,
            ouro: medal_gold,
            prata: medal_silver,
            bronze: medal_bronze,
            totalMedalhas: totalMedalhas
            
        }
    
        arrFormatado.push(paisesFormatado)

        arrFormatado.sort((a,b) => b.totalMedalhas - a.totalMedalhas)

        arrFormatado.sort((a,b) => {

            if(a.totalMedalhas === b.totalMedalhas){

                return b.ouro - a.ouro

            }

        })
        arrFormatado.forEach((element, i) => {

            element.id = i + 1

        })

    })

    return arrFormatado

}

export {ordenaLista}
