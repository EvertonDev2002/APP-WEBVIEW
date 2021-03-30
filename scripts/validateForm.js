const button = document.querySelector('.button')
const input = document.querySelector('.input')
const messegem = document.querySelector('.messegem')

button.addEventListener('click', () =>{
    
     
    if(input.value.trim() == ""){

        messegem.innerHTML = "Você precisa preencher o campo!" 

    }else if(input.value.trim() == "Aiko Tanaka"){

        messegem.innerHTML = "Você encontrou a resposta! Aiko é uma das minhas personagens favorita de Oyasumi Punpun."
        setTimeout(NextPage, 5000)

    }else if(input.value.trim() == localStorage.getItem('user')){

            messegem.innerHTML = "Seja bem-vindo ao meu lar, "+ input.value.trim() + "!" 
            setTimeout(NextPage, 2000)
        }
    else{
        messegem.innerHTML = "Parece que você não encontrou a resposta. Crie um usuário local para entrar." 
        setTimeout(CreateAccount, 3000)
    }
})

function NextPage(){
    location.href = "/pages/sobre.html"
}
function CreateAccount(){
    location.href = "/pages/add.html"
}