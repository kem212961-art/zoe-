# Añadidos desde la solicitud de probar todas las ideas
Base anterior: commit 84a0d7eaea7d8adf1b1eedb116c82c593317753c.
Copia exacta del HTML anterior: work/antes-extras/index.html.

1. Frase «¡Estás invitado a mi aventura mágica!» encima de la edad.
2. Número 5 grande, rosa, brillante y ligeramente inclinado.
3. Bloque de cuenta regresiva pendiente de fecha real: «Pronto anunciaremos la fecha». No inventar una fecha ni mostrar un conteo falso.
4. Mariposas, corazones y estrellas con animación suave; respeta movimiento reducido.
5. Botón «Confirmar por WhatsApp». Falta número real; al pulsarlo avisa que se anunciará. No envía mensajes.
6. Frase «¡Tu amistad es mi mejor regalo! ♡».
7. Botones de confirmar y compartir en una fila, espaciado móvil compacto para una sola pantalla.

Se pueden quitar individualmente o restaurar toda la versión anterior a los extras. Se conserva fondo al 50%, imagen de seis ponis con Zoe y encabezado «Lugar».

Cambio posterior: eliminado el botón Compartir y su manejador. Se mantiene Confirmar por WhatsApp.

Nueva etapa: recorrido de 3 pantallas (carga, sobre con botón para abrir, tarjeta existente). Archivos entrada.css y entrada.js. Copia de HTML anterior: work/antes-extras/antes-tres-pantallas.html. La tarjeta conserva sus elementos. Carga máxima 4 segundos y soporte de movimiento reducido y sin JavaScript.

Cambio de carga: reemplazado fondo/textos y aro por imagen original de Pinkie Pie en carrito, avanzando de izquierda a derecha y porcentaje de 0 a 100 sincronizado durante 4,2 segundos. Al completar, pasa al sobre. Movimiento reducido conserva porcentaje sin desplazamiento. Pantallas 2 y 3 conservadas.

Añadida barra debajo del carrito, encima del porcentaje, sincronizada con el mismo progreso 0–100.

Segunda pantalla: sobre y textos sustituidos por imagen suministrada de Pinkie Pie «Tienes una invitación», con entrada suave, rebote/flotación, destellos y salida al abrir. Se conserva botón Abrir invitación y el recorrido.

Corregida imagen de segunda pantalla: PNG con transparencia real, sin fondo blanco. Animaciones conservadas. Edición mediante ImageGen: quitar únicamente fondo blanco exterior, mantener pony, letrero y colores.

Botón Abrir invitación rediseñado: degradado rosa/fucsia, contorno blanco y rosa, sombra tipo sticker, brillo superior, corazón y estrella amarilla. Tipografía Baloo 2 y estados hover/pulsado/foco. Acción conservada.

Unificación visual de las tres pantallas en estilo-magico.css: rosa/fucsia de los personajes, violeta para textos, bordes blancos y sombras suaves; barra con brillo; texto de bienvenida en cápsula; indicadores rosas; nombre/edad destacados; recuadros de datos y cuenta regresiva en rosa blanco; botón WhatsApp rosa a juego; frase final en cápsula. Espaciado móvil compacto con variantes para pantallas bajas. Se mantienen imágenes, fondo, recorrido y funciones. Puede revertirse quitando el enlace a estilo-magico.css.

Pantalla Tienes una invitación: fondo rosa suave idéntico a la carga. El paisaje se conserva en la tarjeta final.

Eliminada frase «La magia comienza cuando la abres» de la segunda pantalla.

Eliminado rótulo «UN DÍA MUY ESPECIAL». Retirado espacio de cabecera móvil y ajustada tarjeta al alto disponible.

Carro: completadas ambas llantas que estaban cortadas en el PNG original mediante ImageGen (extender parte inferior y reconstruir los neumáticos, fondo transparente). Nuevo recurso pinkie-carrito-completo.png con margen y object-fit contain.

Audio cumpleaños suministrado: reproducción al tocar Abrir invitación (evento directo para compatibilidad móvil), volumen inicial 65%, control de pausa/reanudar visible solo en tarjeta final. No se reproduce en carga ni bienvenida ni se repite en bucle.

Eliminado texto «Número de confirmación por anunciar» y referencia aria-describedby del botón.
