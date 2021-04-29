export let initFilter = function() {
    document.addEventListener('click', (e) => {
        if (e.target.dataset.screen) {
            e.target.parentNode.classList.add('is-open');
        }
    });
}