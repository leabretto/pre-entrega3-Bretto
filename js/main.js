


const zapatillas = [
  {
    id: "1",
    marca: "nike",
    modelo: "Air Jordan",
    precio: "7990",
    imagen: "imagenes/air-jordan-1-retro-high-og-zapatillas.png",
  },
  {
    id: "2",
    marca: "nike",
    modelo: "Air Max",
    precio: "12990",
    imagen: "imagenes/air-max-90-zapatillas-WHvkXZ.png",
  },
  {
    id: "3",
    marca: "Converse",
    modelo: "Converse Red",
    precio: "7990",
    imagen: "imagenes/sneakers-2768218_1280.png",
  },
  {
    id: "4",
    marca: "Converse",
    modelo: "Converse Violet",
    precio: "10990",
    imagen: "../imagenes/sneakers-2768260_1280.png",
  },
  {
    id: "5",
    marca: "Atom",
    modelo: "Atom Gear",
    precio: "14990",
    imagen: "imagenes/sneaker-2768733_640.png",
  },
  {
    id: "6",
    marca: "Converse",
    modelo: "Converse Green",
    precio: "7990",
    imagen: "imagenes/sneakers-g8093b2c87_640.png",
  },
];



function generarProductoHTML(zapatilla) {
  return `
      <div class="productos">
        <img class="img" src="${zapatilla.imagen}" alt="">
        <div class="descripcion">
          <h3 class="titulo-producto">${zapatilla.modelo}</h3>
          <p class="producto-precio">${zapatilla.precio}</p>
          <button class="producto-agregar" id="${zapatilla.id}">Agregar</button>
        </div>
      </div>
    `;
}

const carrito = []

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito") 


for (let i = 0; i < zapatillas.length; i++) {
  const productoHTML = generarProductoHTML(zapatillas[i]);
  contenedorProductos.innerHTML += productoHTML;
}
activarClickEnBotones();


function activarClickEnBotones() {
  const botonesAgregar = document.querySelectorAll('.producto-agregar');
  for (const boton of botonesAgregar) {
    boton.addEventListener('click', (e) => {
      agregarAlCarrito(e.target.id)
      
    });
  }
}

let precioTotal = 0;

function agregarAlCarrito(id) {
  let resultado = zapatillas.find((zapatilla) => zapatilla.id === id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    precioTotal += parseInt(resultado.precio); 
    actualizarCarrito()
  }
}
const precioTotalElement = document.getElementById("precio-total");
precioTotalElement.innerHTML = `$${precioTotal}`;

function generarProductoEnCarritoHTML(producto) {
  return `
    <div class="producto-en-carrito">
      <img src="${producto.imagen}" alt="">
      <div class="descripcion">
        <h3>${producto.modelo}</h3>
        <p>${producto.precio}</p>
      </div>
    </div>
  `;
}

function actualizarCarrito() {
  const listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = '';
  let precioTotal = 0;
  carrito.forEach(producto => {
    const productoEnCarritoHTML = generarProductoEnCarritoHTML(producto);
    listaProductos.innerHTML += productoEnCarritoHTML;
    precioTotal += Number(producto.precio);
  });
  document.getElementById("precio-total").textContent = precioTotal;
}


localStorage.setItem('carrito', JSON.stringify(carrito));

carrito = JSON.parse(localStorage.getItem('carrito')) || [];




