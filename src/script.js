const cartoes = document.getElementById('cartoes');
const botaoCartao = document.getElementById('botaoCartao');

botaoCartao.addEventListener('click', () => {
    const username = document.getElementById('usuario').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
        .then(resposta => resposta.json()) // Converte a resposta para um objeto JSON
        .then(dados => {
            if (dados.message === 'Not Found') {
                alert('Usuário não encontrado!');
            } else {
                fetch(`https://api.github.com/users/${username}/repos`)
                .then(resposta => resposta.json())
                .then(repos => {
                    adicionarCartao(dados, repos);
                })
                .catch(error => {
                    console.log("Erro ao buscar os repositórios", error);
                });
            }
        }).catch(error => {
            alert('Erro ao buscar dados:', error);
        });
    } else {
        alert('Por favor, insira um nome de usuário!');
    }
});

function adicionarCartao(user, repos) {
    const card = document.createElement('div');
    card.className = 'flex flex-col items-center w-64 h-96 border gap-1 rounded-md';

    let reposHtml = repos.map(repo => `
        <div class="repo-item">
            <p class="text-black"><strong>${repo.name}</strong></p>
            <p class="text-gray-800">${repo.description || 'Sem descrição'}</p>
            <p class='bg-slate-400 text-black rounded-sm'>#${repo.language || 'Sem linguagem'}</p>
        </div>
    `).join('');

    card.innerHTML = `
        <img class="h-36" src="github-pages-1024x512.jpg">
        <img class="w-20 h-20 rounded-full object-cover absolute top-40 border-4 border-white" src="${user.avatar_url}" alt="Profile Picture">
        <br>
        <p class="mt-4 font-bold">${user.name || user.login}</p>
        <p class="text-gray-500">@${user.login}</p>
        <div class="flex justify-start rounded-md"><strong class="mt-2">REPOSITÓRIOS</strong></div>
        <div class="flex w-56 h-20 overflow-x-hidden overflow-y-scroll gap-4 bg-gray-200 flex-wrap flex-row rounded-md items-center">
            ${reposHtml}
            
        </div>
    `;
    
    cartoes.appendChild(card);
}
