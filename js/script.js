document.addEventListener("DOMContentLoaded", function () {
    const kissButton = document.getElementById("kissButton");
    const kissImage = document.getElementById("kissImage");
    const kissCounter = document.getElementById("kissCounter");
    const heartContainer = document.getElementById("heartContainer");

    let count = 0;

    // Função para aumentar e diminuir a imagem
    function animateKiss() {
        kissImage.style.transform = "scale(1.2)";
        setTimeout(() => {
            kissImage.style.transform = "scale(1)";
        }, 300);
    }

    // Função para adicionar corações ao fundo
    function createBackgroundHeart() {
        const heart = document.createElement("span");
        heart.classList.add("heart-background");

        // Define uma posição aleatória na tela
        const heartX = Math.random() * 100; // Posição horizontal em porcentagem
        const heartY = Math.random() * 100; // Posição vertical em porcentagem

        heart.style.position = 'absolute';
        heart.style.left = heartX + 'vw'; // Posição horizontal
        heart.style.top = heartY + 'vh'; // Posição vertical

        heartContainer.appendChild(heart);

        // Remove o coração após 2 segundos
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Atualizar contador e interagir com backend
    function updateKisses() {
        count++;
        kissCounter.innerText = count;

        // Faz uma requisição ao PHP para salvar o novo valor
        fetch('backend/update_kisses.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `count=${count}`
        }).then(response => response.text()).then(data => {
            console.log(data); // Debugging
        });
    }

    // Evento de clique no botão
    kissButton.addEventListener("click", function () {
        animateKiss();
        createBackgroundHeart(); // Adiciona um coração ao fundo
        updateKisses();
    });

    // Carregar número inicial de beijos
    fetch('backend/get_kisses.php')
        .then(response => response.text())
        .then(data => {
            kissCounter.innerText = data;
            count = parseInt(data);
        })
        .catch(error => console.error('Error fetching kisses:', error)); // Adicionando tratamento de erro
});
