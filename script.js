// Hero Section Slider
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        try {
            var intervalTime = 5000;
            var carousel = document.getElementById('heroCarousel');
            var bsCarousel = new bootstrap.Carousel(carousel, {
                interval: intervalTime
            });

            function startProgressBar() {
                var activeIndicator = document.querySelector('.carousel-indicators .active');
                if (activeIndicator) {
                    activeIndicator.style.setProperty('--progress', '0');
                    setTimeout(() => {
                        activeIndicator.style.setProperty('--progress', '100%');
                    }, 10);
                }
            }

            function resetProgressBars() {
                document.querySelectorAll('.carousel-indicators button').forEach(function(indicator) {
                    indicator.style.setProperty('--progress', '0');
                });
            }

            function handleCarouselSlide() {
                resetProgressBars();
                setTimeout(startProgressBar, 10);
            }

            function handleHighlight(currentSlide, prevSlide) {
                if (prevSlide) {
                    var prevHighlight = prevSlide.querySelector('.highlight');
                    if (prevHighlight) prevHighlight.classList.add('exit');
                }

                var currentHighlight = currentSlide.querySelector('.highlight');
                if (currentHighlight) {
                    currentHighlight.classList.remove('active', 'exit');
                    setTimeout(function() {
                        currentHighlight.classList.add('active');
                    }, 10);
                }
            }

            carousel.addEventListener('slide.bs.carousel', function (event) {
                resetProgressBars();
                handleHighlight(event.relatedTarget, carousel.querySelector('.carousel-item.active'));
            });

            carousel.addEventListener('slid.bs.carousel', function () {
                handleCarouselSlide();
            });

            // Initially activate the highlight on the first slide and start progress bar
            var firstHighlight = carousel.querySelector('.carousel-item.active .highlight');
            if (firstHighlight) firstHighlight.classList.add('active');
            startProgressBar();

            // Handle visibility changes
            document.addEventListener('visibilitychange', function() {
                if (document.hidden) {
                    bsCarousel.pause();
                    resetProgressBars();
                } else {
                    bsCarousel.cycle();
                    handleCarouselSlide();
                }
            });

            console.log('Carousel initialized successfully');
        } catch (error) {
            console.error('Error initializing carousel:', error);
        }
    }, 100);  // Small delay to ensure Bootstrap is initialized
});

function toggleContent() {
    const moreContent = document.getElementById('more-content');
    moreContent.classList.toggle('show');
}
