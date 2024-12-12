// Función para obtener información geográfica utilizando ipinfo
async function obtenerInformacionGeograficaIpinfo() {
    const token = 'aa89db898a4d09'; // Reemplaza con tu token de acceso de ipinfo
    try {
        const inputGeo = document.getElementById('geo');

        // Obtener la dirección IP del usuario
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        // Obtener información geográfica basada en la IP
        const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        const geoData = await response.json();

        // Mostrar la información geográfica
        // console.log(`IP: ${JSON.stringify(geoData)}`);
        // console.log(`IP: ${geoData.ip}`);
        // console.log(`Ciudad: ${geoData.city}`);
        // console.log(`Región: ${geoData.region}`);
        // console.log(`País: ${geoData.country}`);
        // console.log(`Código postal: ${geoData.postal}`);
        // console.log(`Ubicación: ${geoData.loc}`);

        inputGeo.value = `Ciudad: ${geoData.city}, Region: ${geoData.region}, País: ${geoData.country}, 
        Zona horaria: ${geoData.timezone}`
    } catch (error) {
        console.error('Error al obtener información geográfica:', error);
    }
}

const inputName = document.getElementById('name');

// Para optener la informacion, la optenemos unicamente cuando el usuario
// tiene el foco cuando vaya a ingresar el nombre
inputName.addEventListener('focus', function () {
    console.log('ddd')
    obtenerInformacionGeograficaIpinfo();
})