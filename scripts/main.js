const referencia = document.querySelector(".referencia")
const photo = document.querySelector(".photo")

photo.addEventListener('click', () =>{

    referencia.innerHTML = "Aiko Tanaka, Oyasumi Punpun"
    setTimeout(remove, 3000)
})

function remove(){
    referencia.innerHTML = ""
}