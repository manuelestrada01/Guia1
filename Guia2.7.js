function obtenerRequisitosDesdeEnlace(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Asume que el contenido es JSON
            })
            .then(data => {
                resolve(data); // Devuelve los datos obtenidos
            })
            .catch(error => {
                reject(error); // Maneja cualquier error
            });
    });
}

const enlace = 'https://www.mockachino.com/33754ea7258648/preparativos';

obtenerRequisitosDesdeEnlace(enlace)
    .then(data => {
        console.log('Requisitos obtenidos:', data);
        // Aquí puedes procesar los datos obtenidos, por ejemplo:
        // Puedes realizar alguna operación con los datos obtenidos, como filtrarlos, procesarlos, etc.
    })
    .catch(error => {
        console.error('Error al obtener los requisitos:', error);
    });