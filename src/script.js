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
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    } else {
        alert('Por favor, insira um nome de usuário!');
    }
});

function adicionarCartao(user) {
    const card = document.createElement('div');
    card.className = 'flex';
    card.innerHTML =`<div id="cartoes" class="flex flex-col items-center w-64 h-96 border rounded-md">
        <img class="h-36" src="github-pages-1024x512.jpg">
        <img class="w-20 h-20 rounded-full object-cover absolute top-40 border-4 border-white" src="${user.avatar_url}" alt="Profile Picture">         <br>
        <p class="mt-4 font-bold">${user.name}</p>
                      <p class="text-gray-500">@${user.login}</p>
                      <strong class="mt-2">REPOSITÓRIOS</strong>
                      <p>${user.repos_url}</p>
                      
</div>` 
    cartoes.appendChild(card);
}
