// Hero Section Slider
$(document).ready(function() {
    var intervalTime = 5000;

    function startProgressBar() {
        $('.carousel-indicators .active::before').css('transform', 'scaleX(0)');
    }

    function resetProgressBars() {
        $('.carousel-indicators li::before').css('transform', 'scaleX(1)');
    }

    function handleCarouselSlide() {
        resetProgressBars();
        setTimeout(startProgressBar, 10);
    }

    
    startProgressBar();

    $('#heroCarousel').on('slide.bs.carousel', function () {
        resetProgressBars();
    });

    $('#heroCarousel').on('slid.bs.carousel', function () {
        handleCarouselSlide();
    });

   
    setInterval(function() {
        $('#heroCarousel').carousel('next');
    }, intervalTime);


    $('#heroCarousel').on('slide.bs.carousel', function (e) {
    var $currentSlide = $(e.relatedTarget);
    var $prevSlide = $(e.from ? $(this).find('.carousel-item').eq(e.from) : $('.carousel-item.active'));

    $prevSlide.find('.highlight').addClass('exit');
    $currentSlide.find('.highlight').removeClass('active exit');

    setTimeout(function() {
        $prevSlide.find('.highlight').removeClass('active exit');
        $currentSlide.find('.highlight').addClass('active');
    }, 10);
});

$('.carousel-item.active .highlight').addClass('active');

});

function toggleContent() {
    const moreContent = document.getElementById('more-content');
    moreContent.classList.toggle('show');
}
