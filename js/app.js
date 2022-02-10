const items= document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const templateItemsCarrito = document.getElementById('items-carrito')
const footer= document.getElementById('footer-carrito')
const fragment=document.createDocumentFragment()
let carrito = {}

document.addEventListener ('DOMContentLoaded', () => {
    fetchData();
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})
items.addEventListener('click', e =>{
    addCarrito(e)
})

templateItemsCarrito.addEventListener('click', e => {
    btnAccion(e)
})
const fetchData = async () => {

    try {
        const res = await fetch('json/api.json');
        const data = await res.json()
        /* console.log(data) */
        pintarCard(data)
    } catch (error){
        console.log(error);
    }
}

const pintarCard = data => {
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src",producto.imagen)
        templateCard.querySelector('.btn-carrito').dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

const addCarrito = e =>{
    if(e.target.classList.contains('btn-carrito')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    //console.log(objeto);
    const producto = {
        id: objeto.querySelector('.btn-carrito').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad =carrito [producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito()
    
}

const pintarCarrito = () => {
    //console.log(carrito);
    templateItemsCarrito.innerHTML= ''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio  
        
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    templateItemsCarrito.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {

    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`

        return
    } 

    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc+cantidad,0)
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad,precio}) => acc+ cantidad * precio,0)
    console.log(nPrecio);
    console.log(nCantidad);

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.append(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

    const confirmarCompra=document.getElementById("confirmar-carrito");
    confirmarCompra.addEventListener("click", () =>{
    open("./html/contacto.html")
})  
}

const btnAccion = e => {
        //Acción de aumentar 
    if(e.target.classList.contains('btn-info')){
        //carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }   

    if(e.target.classList.contains('btn-danger')){
        const producto= carrito[e.target.dataset.id]
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }
        producto.cantidad --

        pintarCarrito()

    }

    e.stopPropagation()
}

