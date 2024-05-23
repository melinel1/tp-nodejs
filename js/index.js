'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.galeria-menu button');
    const items = document.querySelectorAll('.galeria-item .item');
    
    botones.forEach(categorias => {
        categorias.addEventListener('click', () => {
            const filtro = categorias.getAttribute('data-filtro');
            
            botones.forEach(categoria => categoria.classList.remove('active'));
            categorias.classList.add('active');
            
            items.forEach(item => {
                if (filtro === '*' || item.classList.contains(filtro)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});