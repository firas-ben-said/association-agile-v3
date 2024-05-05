"use client"

import { useEffect } from 'react';
import styles from './news.module.css';
import Swiper from 'swiper';
import Image from 'next/image';

const News = ({ news }) => {
  useEffect(() => {
    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className={styles['blog-slider']}>
      <div className={`${styles['blog-slider__wrp']} swiper-wrapper`}>
        {news.map((item) => (
          <div key={item.id} className={`${styles['blog-slider__item']} swiper-slide`}>
            <div className={styles['blog-slider__img']}>
              <img src={item.image} alt="" className={styles.img}/>
            </div>
            <div className={styles['blog-slider__content']}>
              <span className={styles['blog-slider__code']}>{item.date}</span>
              <div className={styles['blog-slider__title']}>{item.title}</div>
              <div className={styles['blog-slider__text']}>{item.description}</div>
              <a href="#" className={styles['blog-slider__button']}>READ MORE</a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['blog-slider__pagination']}></div>
    </div>
  );
};

export default News;
