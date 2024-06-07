document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "Transforming Ideas into Digital Reality",
        "Empowering Businesses with Technology",
        "Innovative Solutions for Modern Problems",
        "Your Vision, Our Innovation"
    ];

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let isDeleting = false;

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];

        if (!isDeleting) {
            letter = currentText.slice(0, ++index);
        } else {
            letter = currentText.slice(0, --index);
        }

        document.getElementById('hero-headline').textContent = letter;

        if (!isDeleting && letter.length === currentText.length) {
            setTimeout(() => isDeleting = true, 2000); // Wait 2 seconds before starting to delete
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            setTimeout(type, 500); // Short pause before typing the next text
            return;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }());
});


function toggleContent() {
    const moreContent = document.getElementById('more-content');
    moreContent.classList.toggle('show');
}
