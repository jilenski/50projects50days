const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

console.log(nums);

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classlist.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}
