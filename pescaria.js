const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const pessoas = Number(frm.inNumero.value)
    const peixes = Number(frm.inPeixes.value)
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