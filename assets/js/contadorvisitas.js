// Obtén el contador del almacenamiento local

if (!sessionStorage.getItem('sessionActive')) {

    let visitas = localStorage.getItem('contadorVisitas');

    // Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }
    // Incrementa el contador
    visitas++;

    sessionStorage.setItem('sessionActive', true);

    // Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contadorVisitas', visitas);
}
// Muestra el contador en la página
const visitCountDisplay = localStorage.getItem('contadorVisitas') || 0;
document.getElementById('contador').textContent = visitCountDisplay;