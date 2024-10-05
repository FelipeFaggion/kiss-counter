document.addEventListener("DOMContentLoaded", function () {
    const kissButton = document.getElementById("kissButton");
    const kissImage = document.getElementById("kissImage");
    const kissCounter = document.getElementById("kissCounter");
    const heartContainer = document.getElementById("heartContainer");

    // Verifica se já existe um contador no localStorage, caso contrário inicializa
    let count = localStorage.getItem('kissesCount') ? parseInt(localStorage.getItem('kissesCount')) : 0;
    kissCounter.innerText = count;

    // Função para aumentar e diminuir a imagem
    function animateKiss() {
        kissImage.style.transform = "scale(1.2)";
        setTimeout(() => {
            kissImage.style.transform = "scale(1)";
        }, 300);
    }

    // Função para adicionar corações
    function addHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
    
        // Calcula posições aleatórias em relação à imagem
        const imageRect = kissImage.getBoundingClientRect();
        const heartX = Math.random() * imageRect.width;
        const heartY = Math.random() * imageRect.height;
    
        heart.style.left = `${heartX}px`;
        heart.style.top = `${heartY}px`;
        heartContainer.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 2000); // Remove o coração após a animação
    }

    // Atualizar contador
    function updateKisses() {
        count++;
        kissCounter.innerText = count;
        localStorage.setItem('kissesCount', count); // Armazena o contador no localStorage
    }

    // Evento de clique no botão
    kissButton.addEventListener("click", function () {
        animateKiss();
        addHeart();
        updateKisses();
    });
});
