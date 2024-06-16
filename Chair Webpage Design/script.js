document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion .item');

    items.forEach(item => {
        item.querySelector('.icon').addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
});
