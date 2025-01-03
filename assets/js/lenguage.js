// Obtenemos el contenedor de los elementos
const btnElements = document.getElementById('language');

// Seleccionamos todas las secciones
const txtsToChange = document.querySelectorAll('[data-section]');


var treeLoader = `
  <div class="tree">
      <div class="branch" style="--x:0">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div class="branch" style="--x:1">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div class="branch" style="--x:2">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div class="branch" style="--x:3">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div class="stem">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <span class="shadow"></span>
    </div>`

// Funcion para cargar el archivo segun el idioma
const changeLanguage = async language => {
    const requesJson = await fetch(`assets/lenguages/${language}.json`);
    const texts = await requesJson.json();

    const container = document.getElementById('body');
    const loader = document.createElement('div');
    loader.id = 'preloader';
    // loader.innerHTML = treeLoader;
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
    },550)

};

// Evento que captura que btn se selecciona para mostrar el lenguaje
btnElements.addEventListener('click', (e) => {
    changeLanguage(e.target.dataset.language);
});