import { incCount } from './store';
function fn1(e) {
  e.preventDefault();
  const count = incCount();
  alert('click322: ' + count);
}

console.log('Hello Webpack from index js');
(function ife() {
  let t1 = document.querySelector('#btn');

  t1&&t1.addEventListener('click', fn1);
  
  console.log('ife');
})();

