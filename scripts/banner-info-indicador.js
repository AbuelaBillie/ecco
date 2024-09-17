document.addEventListener('DOMContentLoaded', () => {
    const cont_info_element = document.getElementById("container-info-elementos");
    const indicador_1 = document.getElementById("banner-info-ind-1");
    const indicador_2 = document.getElementById("banner-info-ind-2");
    const indicador_3 = document.getElementById("banner-info-ind-3");
    const bannerInfoSection = document.querySelector('.banner-info');
    
    let startX;
    let currentIndex = 0; // Keep track of the current slide

    function updateIndicatorsAndPosition(index) {
        if (index !== currentIndex) {
            currentIndex = index;
            indicador_1.classList.toggle("indicador-activo", index === 0);
            indicador_2.classList.toggle("indicador-activo", index === 1);
            indicador_3.classList.toggle("indicador-activo", index === 2);
            cont_info_element.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    // Click event handlers
    indicador_1.addEventListener("click", () => updateIndicatorsAndPosition(0));
    indicador_2.addEventListener("click", () => updateIndicatorsAndPosition(1));
    indicador_3.addEventListener("click", () => updateIndicatorsAndPosition(2));

    // Only handle touch events within the .banner-info section
    bannerInfoSection.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    bannerInfoSection.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 50) { // Threshold for swipe detection
            if (deltaX > 0) {
                // Swipe left
                updateIndicatorsAndPosition(Math.min(2, currentIndex + 1));
            } else {
                // Swipe right
                updateIndicatorsAndPosition(Math.max(0, currentIndex - 1));
            }
        }
    });
});