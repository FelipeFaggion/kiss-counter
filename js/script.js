document.addEventListener("DOMContentLoaded", function () {
    const kissButton = document.getElementById("kissButton");
    const kissImage = document.getElementById("kissImage");
    const kissCounter = document.getElementById("kissCounter");
    const heartContainer = document.getElementById("heartContainer");

    let count = localStorage.getItem('kissesCount') ? parseInt(localStorage.getItem('kissesCount')) : 0;
    kissCounter.innerText = count;

    function animateKiss() {
        kissImage.style.transform = "scale(1.2)";
        setTimeout(() => {
            kissImage.style.transform = "scale(1)";
        }, 300);
    }

    function addHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        const imageRect = kissImage.getBoundingClientRect();
        const heartX = Math.random() * (imageRect.width - 20) + imageRect.left + 10; 
        const heartY = Math.random() * (imageRect.height - 20) + imageRect.top + 10;
        
        heart.style.left = `${heartX}px`;
        heart.style.top = `${heartY}px`;
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000); 
    }

    // Atualizar contador
    function updateKisses() {
        count++;
        kissCounter.innerText = count;
        localStorage.setItem('kissesCount', count); 
    }

    kissButton.addEventListener("click", function () {
        animateKiss();
        addHeart();
        updateKisses();
    });
});
