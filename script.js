const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('addImageBtn');

function loadMoreImages() {
    const imageFolderPath = 'imagens/';

    const newImages = [
        'grafite.jpg',
        'grilo.jpg',
        'nuvens.jpg',
        'setup.jpeg',
        'carro.jpeg',
        'carro2.jpeg',
        'skate.jpeg',
        'fit.jpeg',
    ];

    newImages.forEach(function(imageName) {
        const img = document.createElement('img');
        img.src = imageFolderPath + imageName;
        img.alt = `Imagem ${gallery.children.length + 1}`;
        img.classList.add('gallery-image');
        gallery.appendChild(img);
    });
}

loadMoreButton.addEventListener('click', loadMoreImages);
