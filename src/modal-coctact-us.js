(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-us-open]'),
    closeModalBtn: document.querySelector('[contact-us-close]'),
    modal: document.querySelector('[contact-us-container]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
