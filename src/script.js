const cartoes = document.getElementById('cartoes');
const botaoCartao = document.getElementById('botaoCartao');

botaoCartao.addEventListener('click', () => {
    const username = document.getElementById('usuario').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
        .then(resposta => resposta.json()) //o response é uma funcao que vai devolver a resposta como objeto 
        .then(dados => {
            if (dados.message === 'Not Found') {
                alert('Usuário não encontrado!');
            } else {
                fetch(`https://api.github.com/users/${username}/repos`)
                .then(resposta => resposta.json() )
                .then(repos =>{
                    adicionarCartao(dados,repos);
                })
                .catch(error => {
                    console.log("Erro ao buscar os repositórios",error)
                })
            }
            
        }).catch(error => {
            alert('Erro ao buscar dados:', error);
        });
    } else {
        alert('Por favor, insira um nome de usuário!');
    }
    
});

function adicionarCartao(user,repos) {
    const card = document.createElement('div');
    // const reposContainer = card.querySelector('#repositorio');
    const primeiroRepo = repos[0];
    card.className = 'flex';
    card.innerHTML =`<div id="cartoes" class="flex flex-col items-center w-64 h-96 border gap-1 rounded-md">
        <img class="h-36" src="github-pages-1024x512.jpg">
        <img class="w-20 h-20 rounded-full object-cover absolute top-40 border-4 border-white" src="${user.avatar_url}" alt="Profile Picture">         <br>
        <p class="mt-4 font-bold">${user.name}</p>
                      <p class="text-gray-500">@${user.login}</p>
                      <div class="flex justify-start rounded-md"><strong class="mt-2">REPOSITÓRIOS</strong></div>
                      <div class="flex w-56 h-24 bg-gray-200 flex-wrap flex-row rounded-md items-center">
                        <p id='repositorio'class="text-black"><strong>${primeiroRepo.name}</strong></p>
                        <p id='repositorio' class="text-gray-800">${primeiroRepo.description}</p>
                        <p class='bg-slate-400 text-black rounded-sm' id='repositorio'>#${primeiroRepo.language}</p>
                        </div>
                        <a target="_self" href="teste.html">Ver mais</a>
                      
</div>` 
    cartoes.appendChild(card);
}

