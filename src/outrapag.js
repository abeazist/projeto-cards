const cartao = document.getElementById('cartao');

const listaRepos = document.createElement('div');

listaRepos.className='flex';
listaRepos.innerHTML= `<div class="flex top-10 border-gray-600 bg-white">
        <div class="flex w-56 h-24 bg-gray-200 flex-wrap flex-row rounded-md items-center">
            <p class="text-black">${primeiroRepo.name}</p>
            <p class="text-gray-800">${primeiroRepo.description}</p>
            <p class='bg-slate-400 text-black rounded-sm'>#${primeiroRepo.language}</p>
            </div>
    </div>`

function mostrarMais(){

}