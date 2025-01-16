document.addEventListener('DOMContentLoaded', function () {
    const hamburguesa = document.querySelector('.hamburguesa');
    const navegacion = document.querySelector('.enlaces-nav');
    const enlacesNav = document.querySelectorAll('.enlaces-nav li');

    // Evento para abrir/cerrar el menú
    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('nav-activo');

        // Animación de enlaces
        enlacesNav.forEach((enlace, indice) => {
            if (enlace.style.animation) {
                enlace.style.animation = '';
            } else {
                enlace.style.animation = `desvanecerEnlaceNav 0.5s ease forwards ${indice / 7 + 0.3}s`;
            }
        });

        // Animación de la hamburguesa
        hamburguesa.classList.toggle('toggle');
    });

    // Desplazamiento suave al hacer clic en los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
