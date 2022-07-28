(() => {
  const refs = {
    openLocationBtn: document.querySelector('[data-loc-open]'),
    closeLocationBtn: document.querySelector('[data-loc-close]'),
    closeBackBtn: document.querySelector('[data-loc-back]'),
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    location: document.querySelector('[data-loc]'),
    franchise: document.querySelector('[data-franchise]'),
  };

  refs.openLocationBtn.addEventListener('click', toggleModalLocation);
  refs.closeLocationBtn.addEventListener('click', toggleModalLocation);
  refs.closeBackBtn.addEventListener('click', toggleModalLocation);

  function toggleModalLocation() {
    refs.location.classList.toggle('loc-hidden');
  }

  refs.openFranchiseBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.franchise.classList.toggle('franchise-hidden');
  }
})();
