document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { type: 'video', src: 'videos/No seas tonto….mp4' },
        { type: 'video', src: '/videos/3.mp4' },
        { type: 'video', src: 'videos/dia 2 reto contenido.mp4' }, 
        { type: 'video', src: 'videos/es cuestion de animarse.mp4' },
        { type: 'video', src: 'videos/IMG_6688_1.mp4' },
        { type: 'video', src: 'videos/IMG_7452_2.mp4' },
        { type: 'video', src: 'videos/dudé.mp4' },
        { type: 'video', src: 'videos/No necesitas romperte la rodilla.mp4' },
    ];

    const group1 = document.getElementById('media-group-1');
    const group2 = document.getElementById('media-group-2');
    const group3 = document.getElementById('media-group-3');

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('media-item');

        if (item.type === 'video') {
            div.classList.add('video-item');
            div.innerHTML = `<video controls>
                                <source src="${item.src}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>`;
        } else if (item.type === 'cover') {
            div.classList.add('cover-item');
            div.innerHTML = `
            <img src="${item.src}" alt="Cover">`;
        }

        if (index < 2 ) {
            group1.appendChild(div);
        } else if (index < 5) {
            group2.appendChild(div);
        }else if (index > 5) {
            group3.appendChild(div);
        }
    });
});
