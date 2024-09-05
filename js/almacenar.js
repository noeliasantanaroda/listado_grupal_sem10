document.addEventListener('DOMContentLoaded', () => {
    const agregarBtn = document.getElementById('agregar');
    const limpiarBtn = document.getElementById('limpiar');
    const itemInput = document.getElementById('item');
    const contenedor = document.getElementById('contenedor');
  
    // Cargar elementos desde el almacenamiento local al cargar la página
    const cargarElementos = () => {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      contenedor.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
      });
    };
  
    // Agregar nuevo ítem
    const agregarItem = () => {
      const item = itemInput.value.trim();
      if (item) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        cargarElementos();
      }
    };
  
    // Limpiar todos los ítems
    const limpiarItems = () => {
      localStorage.removeItem('items');
      cargarElementos();
    };
  
    agregarBtn.addEventListener('click', agregarItem);
    limpiarBtn.addEventListener('click', limpiarItems);
  
    // Cargar elementos al iniciar
    cargarElementos();
  });