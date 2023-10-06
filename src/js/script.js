
import swipersStart from './swipers';
import scrollToListen from './scrollTo';

function waitDom() {
  return new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', e =>{
      resolve();
    });
  })
}


waitDom().then(res => {
  swipersStart();
  scrollToListen();
});

