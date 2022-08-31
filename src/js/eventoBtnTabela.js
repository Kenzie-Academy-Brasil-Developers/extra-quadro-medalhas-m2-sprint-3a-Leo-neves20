
class EventosBtnTabela {

  static paisMenor(arr){

    arr.sort((a,b) => {

      return a.id - b.id

    })

    return arr

  }

  static paisMaior(arr){

    arr.sort((a,b) => {

      return b.id - a.id

    })

    return arr

  }

  static ouroMenor(arr){

    arr.sort((a,b) => {

      return a.ouro - b.ouro

    })

    return arr

  }

  static ouroMaior(arr){

    arr.sort((a,b) => {

      return b.ouro - a.ouro

    })

    return arr

  }

  static prataMenor(arr){

    arr.sort((a,b) => {

      return a.prata - b.prata

    })

    return arr

  }

  static prataMaior(arr){

    arr.sort((a,b) => {

      return b.prata - a.prata

    })

    return arr

  }

  static bronzeMenor(arr){

    arr.sort((a,b) => {

      return a.bronze - b.bronze

    })

    return arr

  }

  static bronzeMaior(arr){

    arr.sort((a,b) => {

      return b.bronze - a.bronze

    })

    return arr

  }

}

export {EventosBtnTabela}





        