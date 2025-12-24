(function () {

    const imgs = ['Agricultor revisando sistema radicular de sesamo.webp', 'Familia de agricultores aporreando sesamo.webp',
        'Familia de agricultores limpiando sesamo.webp', 'Familias de agricultores limpiando sesamo.webp', 'Germinación de sesamo.webp',
        'Productores de sesamo aporreando y limpiando.webp', 'Sesamo de 15 dias de germinado.webp',
        'Sesamo cosechado y puesto en parvas para el secado en campo.webp', 'Variedad de sesamo ICT R.webp', 'Sesame de 30 dias de germinado.webp',
        'ICTA R.webp','coffegrain.JPG', 'graininplant.jpg', 'mencotal2.JPG', 'womenrecollect.JPG', 'coffewash.png'
    ];

    const loadImgs = imgs => {
        let path = 'assets/img/galery';
        let container = document.getElementById('gallery');
        let items = ''

        imgs.forEach(element => {
            items += `<div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="gallery-item h-100">
                            <img src="${path}/${element}" class="img-fluid" alt="">
                            <div class="gallery-links d-flex align-items-center justify-content-center">
                                <a href="${path}/${element}" title="${element.split('.')[0]}" class="glightbox preview-link"><i
                                    class="bi bi-arrows-angle-expand"></i></a>
                            </div>
                        </div>
                    </div>`

        });

        container.innerHTML = items;

        // Re-inicializar gLightbox después de cargar las imágenes
        const lightbox = GLightbox({
            selector: '.glightbox'
        });
    }

    loadImgs(imgs)

})();

