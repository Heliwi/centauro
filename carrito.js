let carrito = [];

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById('listaCarrito');
    let totalCarrito = 0;
    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
        totalCarrito += item.precio;
    });

    document.getElementById('totalCarrito').textContent = totalCarrito.toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Añade productos para comprar.');
        return;
    }
    alert('¡Gracias por tu compra!');
    carrito = [];
    actualizarCarrito();
}

function enviarFormulario(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje.`);
    document.getElementById('formularioContacto').reset();
}
