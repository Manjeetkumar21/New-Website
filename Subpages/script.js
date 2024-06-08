document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.image-slide'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let index = 0;
    const intervalTime = 3000; // Time in milliseconds
    let autoSlide;

    function duplicateSlides() {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }

    function slide() {
        index++;
        const offset = index * -220; // Change -220 to include margin
        track.style.transform = `translateX(${offset}px)`;

        if (index >= slides.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                index = 0;
                track.style.transform = `translateX(0px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    function startAutoSlide() {
        autoSlide = setInterval(slide, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        slide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        index -= 2;
        if (index < -1) {
            index = slides.length - 3;
            track.style.transition = 'none';
            const offset = index * -220; // Change -220 to include margin
            track.style.transform = `translateX(${offset}px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
                slide();
                startAutoSlide();
            }, 50);
        } else {
            slide();
            startAutoSlide();
        }
    });

    duplicateSlides();
    startAutoSlide();
});
