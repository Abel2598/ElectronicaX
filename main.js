const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
    
    //Mostar categoria "Resistencias" al iniciar
    grid.filter('[data-categoria="resistencias"]');

    //Clic en logo ir a pagina principal
    document.querySelector('#logo').addEventListener('click', () =>{
        window.location.reload(); 
    });


    //Filtrado por categorias
    const enlaces = document.querySelectorAll('#categorias button');
    enlaces.forEach((elemento) =>{
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    //Barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });

    //Listener imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        
        elemento.addEventListener('click', () => {
            const nombre = elemento.parentNode.parentNode.innerHTML;
            overlay.classList.add('activo');
            document.querySelector('#overlay .img-nombre').innerHTML = nombre;
        });
    });

    //Listener boton cerrar
    document.querySelector('#btn-cerrar').addEventListener('click', () =>{
        overlay.classList.remove('activo');
    });

    //Listener overlay
    overlay.addEventListener('click', (evento)=> {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });

        //Listener imagen dudas
        const overlayDudas = document.getElementById('overlay-dudas');
        document.querySelector('#btn-dudas').addEventListener('click', () =>{
            overlayDudas.classList.add('activo');
        });

            //Listener boton cerrar dudas
    document.querySelector('#btn-cerrar-dudas').addEventListener('click', () =>{
        overlayDudas.classList.remove('activo');
    });

        //Listener overlay dudas
        overlayDudas.addEventListener('click', (evento)=> {
            evento.target.id === 'overlay-dudas' ? overlayDudas.classList.remove('activo') : '';
        });
    

        if(!navigator.userAgent.match(/Android/i)){
            const dudasText = document.getElementById('footer-dudas');
            document.querySelector('#btn-dudas').addEventListener('mouseover', ()=>{
                dudasText.classList.add('activo');
            });
            document.querySelector('#btn-dudas').addEventListener('mouseout', ()=>{
                dudasText.classList.remove('activo');
            });
    
            const whatsText = document.getElementById('footer-whatsapp');
            document.querySelector('#btn-whatsapp').addEventListener('mouseover', ()=> {
                whatsText.classList.add('activo');
            });
            document.querySelector('#btn-whatsapp').addEventListener('mouseout', ()=>{
                whatsText.classList.remove('activo');
            });
        }
        //footer mensaje

});
