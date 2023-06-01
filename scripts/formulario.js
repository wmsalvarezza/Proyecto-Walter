let opciones = document.getElementById('horarios');
opciones.addEventListener('change', elegirHorario);

function elegirHorario () {
    let respuesta = document.getElementById('horarios').value;
    let imprimir = document.getElementById('mostrarHorario');
    let mostrarInfo = document.createElement('p');
    mostrarInfo.innerHTML = "El horario que elegiste es: " + respuesta + ". Nos comunicaremos con vos para darte opciones dentro de esa franja horaria";
    imprimir.appendChild(mostrarInfo);
};

