(() => {
    const refs = {
        openReadMoreBtn: document.querySelector('[data-read-more-open]'),
        closeReadMoreBtn: document.querySelector('[data-read-more-close]'),
        readMore: document.querySelector('[data-read-more]'),
    };


    refs.openReadMoreBtn.addEventListener('click', toggleModal);
    refs.closeReadMoreBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.readMore.classList.toggle('read-more-hidden');
    }
})();