// ----- Año dinámico en el footer -----
document.querySelector('#anio').textContent = new Date().getFullYear();

// ----- Modelo de datos en memoria -----
const productos = [
  {
    id: 1,
    categoria: 'relojes',
    nombre: 'Reloj Clásico Acero',
    descripcion: 'Correa de acero, caja negra mate con detalles dorados.',
    precio: '$180.000'
  },
  {
    id: 2,
    categoria: 'relojes',
    nombre: 'Reloj Total Black',
    descripcion: 'Diseño minimalista, correa de goma, resistente al agua.',
    precio: '$150.000'
  },
  {
    id: 3,
    categoria: 'corbatas',
    nombre: 'Corbata Seda Dorada',
    descripcion: 'Textura satinada, ideal para ocasiones formales.',
    precio: '$65.000'
  },
  {
    id: 4,
    categoria: 'corbatas',
    nombre: 'Corbata Slim Negra',
    descripcion: 'Corte delgado, tejido texturizado.',
    precio: '$55.000'
  },
  {
    id: 5,
    categoria: 'billeteras',
    nombre: 'Billetera Cuero Clásica',
    descripcion: 'Cuero genuino, compartimentos para tarjetas y efectivo.',
    precio: '$90.000'
  },
  {
    id: 6,
    categoria: 'cinturones',
    nombre: 'Cinturón Hebilla Dorada',
    descripcion: 'Cuero negro con hebilla metálica dorada.',
    precio: '$70.000'
  }
];

// ----- Render dinámico del catálogo -----
const contenedorProductos = document.querySelector('#productos');

function renderizarProductos(categoria) {
  contenedorProductos.innerHTML = '';

  const listaFiltrada = categoria === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoria);

  listaFiltrada.forEach(producto => {
    const articulo = document.createElement('article');
    articulo.classList.add('producto');
    articulo.dataset.categoria = producto.categoria;

    const imagen = document.createElement('img');
    imagen.src = `https://placehold.co/300x220/1a1a1a/c9a227?text=${encodeURIComponent(producto.nombre)}`;
    imagen.alt = `${producto.nombre}, accesorio de la categoría ${producto.categoria}`;

    const info = document.createElement('div');
    info.classList.add('producto-info');

    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('p');
    precio.classList.add('producto-precio');
    precio.textContent = producto.precio;

    info.appendChild(titulo);
    info.appendChild(descripcion);
    info.appendChild(precio);

    articulo.appendChild(imagen);
    articulo.appendChild(info);

    contenedorProductos.appendChild(articulo);
  });
}

// Render inicial (modelo de datos recorrido al cargar la página)
renderizarProductos('todos');

// ----- Filtros con delegación de eventos -----
const filtros = document.querySelector('#filtros');

filtros.addEventListener('click', (evento) => {
  const boton = evento.target.closest('.filtro');
  if (!boton) return;

  document.querySelectorAll('.filtro').forEach(f => f.classList.remove('activo'));
  boton.classList.add('activo');

  renderizarProductos(boton.dataset.categoria);
});

// ----- Formulario de contacto -----
const formulario = document.querySelector('#formulario-contacto');
const mensajeFormulario = document.querySelector('#mensaje-formulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const correo = document.querySelector('#correo').value.trim();
  const producto = document.querySelector('#producto').value;
  const terminos = document.querySelector('#terminos').checked;

  if (!nombre || !correo || !producto || !terminos) {
    mensajeFormulario.textContent = 'Por favor completa los campos obligatorios antes de enviar.';
    mensajeFormulario.classList.remove('exito');
    mensajeFormulario.classList.add('error');
    return;
  }

  mensajeFormulario.textContent = `Gracias, ${nombre}. Te contactaremos pronto al correo ${correo}.`;
  mensajeFormulario.classList.remove('error');
  mensajeFormulario.classList.add('exito');

  formulario.reset();
});formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const correo = document.querySelector('#correo').value.trim();
  const producto = document.querySelector('#producto').value;
  const terminos = document.querySelector('#terminos').checked;

  if (!nombre || !correo || !producto || !terminos) {
    mensajeFormulario.textContent = 'Por favor completa los campos obligatorios antes de enviar.';
    mensajeFormulario.classList.remove('exito');
    mensajeFormulario.classList.add('error');
    return;
  }

  mensajeFormulario.textContent = `Gracias, ${nombre}. Te contactaremos pronto al correo ${correo}.`;
  mensajeFormulario.classList.remove('error');
  mensajeFormulario.classList.add('exito');

  formulario.reset();
});
