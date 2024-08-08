document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const totalSlides = slideImages.length;
    let index = 0;

    function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(${-index * 100 / totalSlides}%)`;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Auto-slide function created
    setInterval(() => {
        showSlide(index + 1);
    }, 3000);

    // Set the width of each slide image dynamically
    slideImages.forEach((img) => {
        img.style.width = `${100 / totalSlides}%`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const moreElements = document.querySelectorAll(".more");

    moreElements.forEach(moreElement => {
        moreElement.addEventListener("click", function () {
            const productBox = this.closest('.product');
            const description = this.nextElementSibling;

            if (!productBox.classList.contains('expanded')) {
                description.style.display = "block";
                productBox.classList.add('expanded');
                productBox.style.height = "auto";
                this.textContent = "Less";
            } else {
                description.style.display = "none";
                productBox.classList.remove('expanded');
                productBox.style.height = "480px";
                this.textContent = "More";
            }
        });
    });
});
