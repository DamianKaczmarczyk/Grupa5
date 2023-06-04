(() => {
  const refs = {
    openModalBtn1: document.querySelector('[contact-us-open]'),
    openModalBtn2: document.querySelector('[contact-us-open2]'),
    openModalBtn3: document.querySelector('[contact-us-open3]'),
    closeModalBtn1: document.querySelector('[contact-us-close]'),
    closeModalBtn2: document.querySelector('[contact-us-close]'),
    modal1: document.querySelector('[contact-us-container]'),
    modal2: document.querySelector('[contact-us-container]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal1);
  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn1.addEventListener('click', toggleModal1);
  

  function toggleModal1() {
    refs.modal1.classList.toggle('is-hidden');
  }
  function toggleModal2() {
    refs.modal2.classList.toggle('is-hidden');
  }
})();
