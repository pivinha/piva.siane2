const form = document.querySelector("form")
const resp = document.querySelector("h4")

form = addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const pessoas = Number(form.inNumero.value)
    const peixes = Number(form.inCondutor.value)
    let resultado
        if(peixes > pessoas){
            resultado = (pessoas * 20) + ((peixe - pessoas) * 12)
        } else {
        resultado = pessoas* 20
        }

        resp.innerText = `N° de pessoas: ${pessoas}\n
                          N° de peixes: ${peixes}\n
                          pagar: R$ ${resultado.toFixed(2)}`
})