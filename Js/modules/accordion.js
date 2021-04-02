export default function initAccordion() {
  const accordionIList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if (accordionIList.length) {
    accordionIList[0].classList.add(activeClass);
    accordionIList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.classList.toggle('ativo') /*  toggle = remove a classe  */
      this.nextElementSibling.classList.toggle('ativo') /* this = retorna o item que foi clicado */
    };
    accordionIList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  };
};