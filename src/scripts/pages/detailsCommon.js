import Infos from '../components/infos'
import React from 'react';

export const animateIn = (slides) => {
  slides.map((el, index) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('active');
      });
    });
  });

  const loader = document.querySelector('.slides .loader');

  setTimeout(() => {
    loader.classList.add('show');
  }, 200);
}

export const enableScroll = () => {
  document.querySelector('html').classList.remove('disable-scroll');
}

export const disableScroll = () => {
  document.querySelector('html').classList.add('disable-scroll');
}

export const coverOnLoad = (content, img, slides, positionInfos, tilt) => {
  setTimeout(() => {
    const loader = document.querySelector('.slides .loader');

    setTimeout(() => {
      positionInfos();

      content.classList.add('active');
      img.classList.add('show');

      slides.reverse().map((el, index) => {
        loader.classList.remove('show');
        el.classList.remove('active');
        el.classList.add('out');
      });

      tilt.init(img);
    }, 800);
  }, 300);

  disableScroll();
}

export const infoData = (data, hasItens, title)=> {
  return hasItens(data) ? <Infos title={title} type={title.toLowerCase()} data={data.items}></Infos> : ''
}
