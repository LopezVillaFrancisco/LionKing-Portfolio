document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: 'images-about/1.png' },
        { src: 'images-about/2.png' },
        { src: 'images-about/3.png' },
        { src: 'images-about/4.png' },
        { src: 'images-about/5.png' },
        { src: 'images-about/6.png' },
        { src: 'images-about/7.png' }
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control-prev');

    images.forEach((image, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (index === 0) div.classList.add('active'); 

        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('d-block', 'w-100'); 
        div.appendChild(img);
        carouselInner.appendChild(div);
    });

    $('#image-slider').carousel({
        interval: 2000 
    });

    $('#image-slider').on('slid.bs.carousel', function () {
        const currentIndex = $('.carousel-item.active').index();
        if (currentIndex === 0) {
            prevButton.style.pointerEvents = 'none';
        } else {
            prevButton.style.pointerEvents = 'auto';
        }
    });
});
