import './sass/main.scss';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[follow-open]'),
    closeModalBtn: document.querySelector('[follow-close]'),
    modal: document.querySelector('[follow-container]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
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
(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-menu-open]'),
    closeModalBtn: document.querySelector('[mobile-menu-close]'),
    modal: document.querySelector('[mobile-menu-container]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
