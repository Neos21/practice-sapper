import * as sapper from '@sapper/app';

const sapperElement: string = '#sapper';

sapper.start({
  target: document.querySelector(sapperElement)
});
