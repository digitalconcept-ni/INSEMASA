// Obtenemos el contenedor de los elementos
const btnElements = document.getElementById('language');

// Seleccionamos todas las secciones
const txtsToChange = document.querySelectorAll('[data-section]');

// Funcion para cargar el archivo segun el idioma
const changeLanguage = async language => {
    // Opotenemos el nombre del documento
    // para saber que documento vamos a utilizar para la traduccion
    let pathname = window.location.hash.split('#')[1].split('.')[0];
    // let pathname = window.location.pathname.split('/')[1].split('.')[0];

    console.log(window.location)
    console.log(pathname)

    if (pathname != 'index') {
        var path = `assets/lenguages/${language}-${pathname}.json`;
    } else {
        var path = `assets/lenguages/${language}.json`;
    }
    
    const requesJson = await fetch(`${path}`);
    const texts = await requesJson.json();

    const container = document.getElementById('body');
    const loader = document.createElement('div');
    loader.id = 'preloader';
    container.appendChild(loader);

    setTimeout(function () {
        for (const txtToChange of txtsToChange) {
            const section = txtToChange.dataset.section;
            const value = txtToChange.dataset.value;

            txtToChange.innerHTML = texts[section][value];
        }

        const preloader = document.querySelector('#preloader');
        if (preloader) {
            preloader.remove();
        }
    }, 550)

};

// Evento que captura que btn se selecciona para mostrar el lenguaje
btnElements.addEventListener('click', (e) => {
    changeLanguage(e.target.dataset.language);
});