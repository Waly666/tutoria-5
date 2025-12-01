// ============================================
// Tutorial: Manejo del DOM en JavaScript
// ============================================

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. SELECCIÓN DE ELEMENTOS
    // ============================================
    
    // Seleccionar por ID
    const btnSeleccionarId = document.getElementById('btn-seleccionar-id');
    btnSeleccionarId.addEventListener('click', function() {
        const elemento = document.getElementById('elemento-id');
        elemento.classList.toggle('highlight');
        console.log('Elemento seleccionado por ID:', elemento);
        alert('Se seleccionó el elemento con ID "elemento-id"');
    });
    
    // Seleccionar por Clase
    const btnSeleccionarClase = document.getElementById('btn-seleccionar-clase');
    btnSeleccionarClase.addEventListener('click', function() {
        const elementos = document.getElementsByClassName('clase-ejemplo');
        // getElementsByClassName retorna una HTMLCollection
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].classList.toggle('highlight');
        }
        console.log('Elementos seleccionados por clase:', elementos);
        alert(`Se seleccionaron ${elementos.length} elementos con clase "clase-ejemplo"`);
    });
    
    // querySelector y querySelectorAll
    const btnQuerySelector = document.getElementById('btn-query-selector');
    btnQuerySelector.addEventListener('click', function() {
        // querySelector selecciona el primer elemento que coincide
        const elemento = document.querySelector('[data-info="ejemplo"]');
        elemento.classList.toggle('highlight');
        console.log('Elemento seleccionado con querySelector:', elemento);
        alert('Se seleccionó el elemento con data-info="ejemplo"');
    });
    
    // ============================================
    // 2. MODIFICACIÓN DE CONTENIDO
    // ============================================
    
    const textoModificar = document.getElementById('texto-modificar');
    let contadorTexto = 0;
    
    // Cambiar texto con textContent
    const btnCambiarTexto = document.getElementById('btn-cambiar-texto');
    btnCambiarTexto.addEventListener('click', function() {
        contadorTexto++;
        textoModificar.textContent = `Texto modificado con textContent (vez #${contadorTexto})`;
        console.log('Nuevo textContent:', textoModificar.textContent);
    });
    
    // Cambiar HTML con innerHTML
    const btnCambiarHtml = document.getElementById('btn-cambiar-html');
    btnCambiarHtml.addEventListener('click', function() {
        contadorTexto++;
        textoModificar.innerHTML = `<strong>HTML modificado</strong> con <em>innerHTML</em> (vez #${contadorTexto})`;
        console.log('Nuevo innerHTML:', textoModificar.innerHTML);
    });
    
    // ============================================
    // 3. MODIFICACIÓN DE ESTILOS
    // ============================================
    
    const cajaEstilos = document.getElementById('caja-estilos');
    const colores = ['#e9ecef', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
    let colorIndex = 0;
    
    // Cambiar color
    const btnCambiarColor = document.getElementById('btn-cambiar-color');
    btnCambiarColor.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colores.length;
        cajaEstilos.style.backgroundColor = colores[colorIndex];
        console.log('Nuevo color:', colores[colorIndex]);
    });
    
    // Cambiar tamaño
    const btnCambiarTamano = document.getElementById('btn-cambiar-tamano');
    let tamanoGrande = false;
    btnCambiarTamano.addEventListener('click', function() {
        tamanoGrande = !tamanoGrande;
        if (tamanoGrande) {
            cajaEstilos.style.padding = '2rem';
            cajaEstilos.style.fontSize = '1.5rem';
        } else {
            cajaEstilos.style.padding = '1rem';
            cajaEstilos.style.fontSize = '1rem';
        }
        console.log('Tamaño grande:', tamanoGrande);
    });
    
    // Toggle clase CSS
    const btnToggleClase = document.getElementById('btn-toggle-clase');
    btnToggleClase.addEventListener('click', function() {
        cajaEstilos.classList.toggle('destacada');
        console.log('Clases actuales:', cajaEstilos.className);
    });
    
    // ============================================
    // 4. CREAR Y ELIMINAR ELEMENTOS
    // ============================================
    
    const listaDinamica = document.getElementById('lista-dinamica');
    let contadorElementos = 1;
    
    // Agregar elemento
    const btnAgregarElemento = document.getElementById('btn-agregar-elemento');
    btnAgregarElemento.addEventListener('click', function() {
        contadorElementos++;
        
        // Crear nuevo elemento li
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = `Elemento agregado #${contadorElementos}`;
        
        // Agregar a la lista
        listaDinamica.appendChild(nuevoElemento);
        
        console.log('Elemento agregado:', nuevoElemento);
        console.log('Total de elementos:', listaDinamica.children.length);
    });
    
    // Eliminar último elemento
    const btnEliminarElemento = document.getElementById('btn-eliminar-elemento');
    btnEliminarElemento.addEventListener('click', function() {
        const elementos = listaDinamica.children;
        if (elementos.length > 0) {
            const ultimoElemento = elementos[elementos.length - 1];
            listaDinamica.removeChild(ultimoElemento);
            console.log('Elemento eliminado:', ultimoElemento);
        } else {
            alert('No hay elementos para eliminar');
        }
        console.log('Total de elementos:', listaDinamica.children.length);
    });
    
    // ============================================
    // 5. MANEJO DE EVENTOS
    // ============================================
    
    const areaEventos = document.getElementById('area-eventos');
    const infoEventos = document.getElementById('info-eventos');
    
    // Eventos del mouse
    areaEventos.addEventListener('mouseenter', function(event) {
        infoEventos.textContent = `Mouse entró en el área - Posición: (${event.clientX}, ${event.clientY})`;
        this.style.backgroundColor = '#c3e6cb';
    });
    
    areaEventos.addEventListener('mouseleave', function() {
        infoEventos.textContent = 'Mouse salió del área';
        this.style.backgroundColor = '#e9ecef';
    });
    
    areaEventos.addEventListener('click', function(event) {
        infoEventos.textContent = `Click detectado - Posición: (${event.clientX}, ${event.clientY}) - Botón: ${event.button}`;
        console.log('Evento click:', event);
    });
    
    areaEventos.addEventListener('dblclick', function(event) {
        infoEventos.textContent = `Doble click detectado - Posición: (${event.clientX}, ${event.clientY})`;
        console.log('Evento doble click:', event);
    });
    
    // Eventos del teclado
    const inputTeclado = document.getElementById('input-teclado');
    const infoTeclado = document.getElementById('info-teclado');
    
    inputTeclado.addEventListener('keydown', function(event) {
        infoTeclado.textContent = `Tecla presionada: "${event.key}" - Código: ${event.code} - Valor actual: "${this.value}"`;
        console.log('Evento keydown:', event);
    });
    
    inputTeclado.addEventListener('keyup', function(event) {
        infoTeclado.textContent = `Tecla soltada: "${event.key}" - Valor final: "${this.value}"`;
        console.log('Evento keyup:', event);
    });
    
    inputTeclado.addEventListener('input', function(event) {
        console.log('Evento input - Nuevo valor:', this.value);
    });
    
    // ============================================
    // 6. MANIPULACIÓN DE FORMULARIOS
    // ============================================
    
    const formulario = document.getElementById('formulario-ejemplo');
    const resultadoFormulario = document.getElementById('resultado-formulario');
    
    formulario.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();
        
        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email) {
            alert('Por favor, completa los campos obligatorios (Nombre y Email)');
            return;
        }
        
        // Mostrar resultado
        resultadoFormulario.innerHTML = `
            <h4>Datos recibidos:</h4>
            <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Mensaje:</strong> ${escapeHtml(mensaje) || '(sin mensaje)'}</p>
        `;
        resultadoFormulario.classList.add('visible');
        
        console.log('Formulario enviado:', { nombre, email, mensaje });
        
        // Limpiar formulario después de 5 segundos
        setTimeout(function() {
            formulario.reset();
            resultadoFormulario.classList.remove('visible');
        }, 5000);
    });
    
    // Función auxiliar para escapar HTML y prevenir XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ============================================
    // MENSAJE DE BIENVENIDA EN CONSOLA
    // ============================================
    
    console.log('%c¡Bienvenido al Tutorial de Manejo del DOM!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('Abre la consola del desarrollador para ver los logs de las interacciones.');
    console.log('Explora cada sección y haz clic en los botones para ver cómo funciona la manipulación del DOM.');
});
