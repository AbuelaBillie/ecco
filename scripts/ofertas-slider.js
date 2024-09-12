document.addEventListener('DOMContentLoaded', () => {
    const cont_info_element = document.getElementById("contenedor-productos");
    const bannerInfoSection = document.querySelector('.ofertas');
    
    let startX;
    let currentIndex = 0; // Keep track of the current slide
    const totalSlides = 3; // Número total de slides (deberías ajustar esto según tu caso)

    function updateIndicatorsAndPosition(index) {
        // Update only if the index is within bounds
        if (index >= 0 && index < totalSlides) {
            currentIndex = index;
            cont_info_element.style.transform = `translateX(-${index * 40}%)`; // Ajusta el porcentaje si es necesario
        }
    }

    // Only handle touch events within the .banner-info section
    bannerInfoSection.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    bannerInfoSection.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 50) { // Threshold for swipe detection
            if (deltaX > 0) {
                // Swipe left (to the next slide)
                // Move to the next slide or cycle to the first slide if at the last slide
                if (currentIndex < totalSlides - 1) {
                    updateIndicatorsAndPosition(currentIndex + 1);
                } else {
                    updateIndicatorsAndPosition(0); // Move to the first slide
                }
            } else {
                // Swipe right (to the previous slide)
                // Move to the previous slide only if not at the first slide
                if (currentIndex > 0) {
                    updateIndicatorsAndPosition(currentIndex - 1);
                }
            }
        }
    });
});