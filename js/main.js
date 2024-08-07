
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var nav = document.querySelector('nav');

    // Función para manejar la visibilidad del menú
    function handleMenuToggle() {
        if (window.innerWidth <= 768) { // Ajusta el ancho según tus necesidades
            if (menuIcon && nav) { // Asegúrate de que los elementos existen
                menuIcon.addEventListener('click', function() {
                    if (nav.style.display === 'none' || nav.style.display === '') {
                        nav.style.display = 'block';
                    } else {
                        nav.style.display = 'none';
                    }
                });
            }
        } else {
            // Asegúrate de que el menú esté visible en pantallas grandes
            if (nav) {
                nav.style.display = 'block';
            }
        }
    }

    // Llama a la función al cargar la página
    handleMenuToggle();

    // Llama a la función cada vez que se redimensiona la ventana
    window.addEventListener('resize', handleMenuToggle);
});

// Selecciona el botón
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Muestra el botón cuando el usuario se desplaza hacia abajo más de 20px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Cuando el usuario hace clic en el botón, vuelve al inicio de la página
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Suaviza el desplazamiento
        });
    });
}

