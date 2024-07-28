document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { type: 'video', src: 'videos/video jaime bueno.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.29.18 p. m..png' },
        { type: 'video', src: 'videos/Video Jaime 1 prueba (1).mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.29.38 p. m..png' },
        { type: 'video', src: 'videos/IMG_6688_1.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.30.14 p. m..png' },
        { type: 'video', src: 'videos/IMG_7452_2.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.30.23 p. m..png' },
        { type: 'video', src: 'videos/IMG_5288_2.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.30.34 p. m..png' },
        { type: 'video', src: 'videos/Revisa.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.30.43 p. m..png' },
        { type: 'video', src: 'videos/3.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.30.52 p. m..png' },
        { type: 'video', src: 'videos/dia 2 reto contenido.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.31.24 p. m..png' },
        { type: 'video', src: 'videos/cuestion de animarse.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.31.36 p. m..png' },
        { type: 'video', src: 'videos/Vi la oportunidad.mp4', poster: 'portadas/Captura de pantalla 2024-07-27 a la(s) 8.31.46 p. m..png' },
    ];

    const group1 = document.getElementById('media-group-1');
    const group2 = document.getElementById('media-group-2');
    const group3 = document.getElementById('media-group-3');
    const group4 = document.getElementById('media-group-4');

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('media-item');
        div.setAttribute('data-aos', 'fade-up');

        if (item.type === 'video') {
            div.classList.add('video-item');
            div.innerHTML = `
                <div class="video-wrapper">
                    <video controls poster="${item.poster}">
                        <source src="${item.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-overlay"></div>
                </div>`;
        } else if (item.type === 'cover') {
            div.classList.add('cover-item');
            div.innerHTML = `<img src="${item.src}" alt="Cover">`;
        }

        if (index < 2) {
            group1.appendChild(div);
        } else if (index < 5) {
            group2.appendChild(div);
        } else if (index < 8) {
            group3.appendChild(div);
        } else {
            group4.appendChild(div);
        }
    });

    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });
});
