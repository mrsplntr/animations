const onStep1 = document.getElementById('onStep1');
const onStep2 = document.getElementById('onStep2');
const onStep3 = document.getElementById('onStep3');
const onStep4 = document.getElementById('onStep4');
const btns = document.getElementById('btns');
const p = document.getElementById('p');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

onStep1.addEventListener('click', () => {
  toggleBtns();
  toggleClassAfter(text, 'firstStep', 6000);
})

onStep2.addEventListener('click', () => {
  toggleBtns();
  toggleClassAfter(text, 'secondStep', 6000);
})

onStep3.addEventListener('click', () => {
  toggleBtns();
  toggleClassAfter(text, 'initial', 7000);
  toggleClassAfter(text, 'initial3', 7000);
  toggleClassAfter(text, 'thirdStep', 6000);
});

onStep4.addEventListener('click', () => {
  toggleBtns();
  toggleClassAfter(text, 'initial', 7000);
  toggleClassAfter(text, 'initial3', 7000);
  toggleClassAfter(text, 'thirdStep', 6000);
  setTimeout(() => {
    text2.style.display = 'block';
    toggleClassAfter(text2, 'thirdStep', 4000);
  }, 1000);
  setTimeout(() => {
    text3.style.display = 'block';
    toggleClassAfter(text3, 'thirdStep', 2000);
  }, 2000);
  setTimeout(() => {
    text2.style.display = 'none';
    text3.style.display = 'none';
  }, 4000)
});

const toggleClassAfter = (element, className, time) => {
  element.classList.toggle(className);
  setTimeout(() => {
    element.classList.toggle(className);
  }, time);
}

const toggleBtns = () => {
  btns.style.display = 'none';
  p.style.display = 'block';
  setTimeout(() => {
    btns.style.display = 'block';
    p.style.display = 'none';
  }, 7500)
}