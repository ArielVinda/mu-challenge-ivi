let about = document.getElementById('about');
let faq = document.getElementById('faq');

let questions = document.querySelectorAll('.faq-question');
questions.forEach(element => {
  element.addEventListener('click', (item) => {
    if(element.getAttribute('expanded') === null) {
      element.setAttribute('expanded', '');
    } else {
      element.removeAttribute('expanded');
    }
  }
  )
});

function scroll_to(element) {
  console.log('scroll pressed', element);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}