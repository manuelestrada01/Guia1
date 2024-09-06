async function listoParaViajar() {
    try{
        let response = await fetch("https://www.mockachino.com/33754ea7-2586-48/preparativos");
        let data = await response.json()
        let dataLimpia = data.preparativos

        let dataFiltrada = dataLimpia.filter(function(x){
            return x.valor === false
        })

        let listoResultado = dataFiltrada.map((x) => `${x.requisito}`).join(", ")
        console.log("Requisitos faltantes: ", listoResultado)

        }catch(error){
            console.log(error)
        }
}
listoParaViajar("https://www.mockachino.com/33754ea7-2586-48/preparativos")




async function listoHam() {
    try {
        let responseH = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=8000") 
        let dataH = await responseH.json()
        return dataH.nombre

    
    } catch (error) {
        console.log("ERROR HAM")
    }
}


async function listoEns() {
    try {
        let responseE = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/ensalada?mock_delay=4000")
        let dataE = await responseE.json()
        return dataE.nombre

    } catch (error) {
        console.log("ERROR ENS")
    }
}


async function listoGas() {
    try {
        let responseG = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=2000")
        let dataG = await responseG.json()
        return dataG.nombre

    } catch (error) {
        console.log("ERROR GAS")
    }
}


async function prepararComida() {
    try {
        const [hamburguesa, ensalada, bedida] = await Promise.all([listoHam(), listoEns(), listoGas()])
    console.log("Esta Listo")
    
    } catch (error) {
        console.log("ERROR General")
    }

}

prepararComida()