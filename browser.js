const qs = (selector) => document.querySelector(selector);

const task1Btn = qs(".task1__btn");
const even = qs(".task1__list-even");
const odd = qs(".task1__list-odd");

let evenArr = [];
let oddArr = [];

const generateNumb = () => {
  evenArr = [];
  oddArr = [];
  even.innerHTML = "";
  odd.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let temp = Math.floor(Math.random(1, 100) * 100);
    if (temp % 2 == 0) {
      evenArr.push(temp);
    } else {
      oddArr.push(temp);
    }
  }
  evenArr
    .sort((x, y) => x - y)
    .map((e) => {
      even.innerHTML += `<li class="task1__item">${e}</li>`;
    });
  oddArr
    .sort((x, y) => x - y)
    .map((e) => {
      odd.innerHTML += `<li class="task1__item">${e}</li>`;
    });
};

task1Btn.addEventListener("click", generateNumb);
