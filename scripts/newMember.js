const button = document.querySelector('.button')
const input = document.querySelector('.input')
const messegem = document.querySelector('.messegem')

button.addEventListener('click', () =>{
    
    if(input.value.trim() == ""){

        messegem.innerHTML = "Você precisa digita algo!"
    }else{

        localStorage.setItem('user', input.value.trim())
        messegem.innerHTML = "Usuário adicionado localmente."
        setTimeout(BackPage, 3000)
    }
})

function BackPage(){
    location.href = "/"
}