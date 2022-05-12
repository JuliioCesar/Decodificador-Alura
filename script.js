const criptografar = document.querySelector(".cript")
const input = document.querySelector("input")
const resultado = document.querySelector(".caixa-resultado")

criptografar.addEventListener("click", () => {
    const textEncriptografado = encriptar(input.value)
    resultado.innerText = textEncriptografado
    resultado.style.backgroundImage = "none"
    
})
function encriptar(sEncriptada) {
    let arrMatriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    sEncriptada = sEncriptada.toLowerCase()

    for (let i = 0; i < arrMatriz.length; i++){
        if (sEncriptada.includes(arrMatriz[i][0])) {
            sEncriptada = sEncriptada.replaceAll(arrMatriz[i][0], arrMatriz[i][1])
        }
    }
    return sEncriptada
}
