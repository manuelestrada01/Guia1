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