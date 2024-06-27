const cartoes = document.getElementById('cartoes');
const botaoCartao = document.getElementById('botaoCartao');

botaoCartao.addEventListener('click', () => {
    const username = document.getElementById('usuario').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Not Found') {
                    alert('Usuário não encontrado!');
                } else {
                    adicionarCartao(data);
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
    card.className = 'flex flex-col items-center w-1/5 h-auto border rounded-md m-4 p-4 bg-white shadow-lg';
    card.innerHTML = `<div id="cartoes" class="flex flex-col items-center flex-wrap w-1/5 h-96 border rounded-md">
        <img class="h-40" src="github-pages-1024x512.jpg">
        <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                        <img class="w-full h-full object-cover" src="${user.avatar_url}" alt="Profile Picture">
                        
        </div>
    </div>
                      <p class="mt-4 font-bold">${user.name}</p>
                      <p class="text-gray-500">@${user.login}</p>
                      <strong class="mt-2">REPOSITÓRIOS</strong>
                      <p>${user.public_repos}</p>`;

    cartoes.appendChild(card);
}
