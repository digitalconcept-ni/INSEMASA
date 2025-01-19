(function () {

    const imgs = ['CONTROL DE CALIDAD.webp' ,'SIEMBRA2.webp', 'CULTIVO.webp',
        'CORTANDO MALEZA.webp', 'FRUTO.webp', 'SEMILLA.webp',
        'AGRICULTORES.webp', 'MUJER AGRICULTORA.webp', 'LIMPIEZA.webp'
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

