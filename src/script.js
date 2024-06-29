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
                adicionarCartao(dados);
            }
            const repos = document.getElementById('repos').value;
        })}if (repos) {
                fetch(`https://api.github.com/repos/${repos}`)
                .then(resposta => resposta.json())
                
            }
    //         .catch(error => {
    //             console.error('Erro ao buscar dados:', error);
    //         });
    // } else {
    //     alert('Por favor, insira um nome de usuário!');
    // }
    
});

function adicionarCartao(user) {
    const card = document.createElement('div');
    card.className = 'flex';
    card.innerHTML =`<div id="cartoes" class="flex flex-col items-center w-64 h-96 border rounded-md">
        <img class="h-36" src="github-pages-1024x512.jpg">
        <img class="w-20 h-20 rounded-full object-cover absolute top-40 border-4 border-white" src="${user.avatar_url}" alt="Profile Picture">         <br>
        <p class="mt-4 font-bold">${user.name}</p>
                      <p class="text-gray-500">@${user.login}</p>
                      <div class="flex justify-start rounded-sm"><strong class="mt-2">REPOSITÓRIOS</strong></div>
                      <div class="flex w-56 h-20 bg-gray-200 justify-center rounded-sm items-center">
                        <p id='repositorio'class="text-black">${repos.name}</p>
                        <p id='repositorio' class="text-gray-800">${repos.description}</p>
                        <div class='bg-slate-400 text-black rounded-sm'><p id='repositorio'>${repos.language}</p></div>
                    </div>
                      
</div>` 
    cartoes.appendChild(card);
}
