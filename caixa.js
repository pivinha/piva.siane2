const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const form = document.querySelector("#outResp2")
const resp = document.querySelector("#outResp3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAltura.value)

let peso
 if(masculino){
    peso=22 *Math.pow(altura, 2)
 } else{
    peso=21 *Math.pow(altura,2)
 }
   resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}kg`
})
    
fora.addEventListener("reset", (e)=> {
    resp.innetText = " "
})