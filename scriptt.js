function mostrarEpisodios(numeroAnime) {
    const titulo = document.getElementById("anime-title");
    const lista = document.getElementById("episodios-list");
    const container = document.getElementById("episodios-container");

    // Definir o nome do anime
    titulo.innerText = `Episódios de Anime ${numeroAnime}`;

    // Limpar lista anterior
    lista.innerHTML = "";

    // Criar lista de episódios
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerText = `Episódio ${i}`;
        lista.appendChild(li);
    }

    // Mostrar container
    container.classList.remove("hidden");
}

function fecharEpisodios() {
    document.getElementById("episodios-container").classList.add("hidden");
}