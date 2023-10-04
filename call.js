const form = document.querySelector("form")
const form = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    conts nome = form.inNome.value
    conts masculino = form.inMasculino.checked
    conts altura = Number(form.inAltura.value)

    let peso
    if (masculino) {
        peso = 22* Math.pow(altura, 2)
    }
    
}