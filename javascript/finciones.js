document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Gracias por contactarnos!');
        form.reset();
    });

    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 15000);
    carouselItems[currentIndex].classList.add('active');

    const newsItems = document.querySelectorAll('.news-item');

    function showNextNews() {
        newsItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % newsItems.length;
        newsItems[currentIndex].classList.add('active');
    }

    setInterval(showNextNews, 20000); // Cambia la noticia cada 20 segundos
});