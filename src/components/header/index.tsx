import React from 'react';
import classNamesBind from 'classnames/bind';
import { electronApi } from '../../api/electron';
import styles from './index.module.scss';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'header';

export const Header = () => {
  const handleMinimizeClick = () => {
    electronApi.send('minimize');
  };

  const handleCloseClick = () => {
    electronApi.send('close');
  };

  return (
    <header className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__draggable-area`)}>
        LOGO
      </div>

      <button
        className={cn(`${CLASS_NAME}__button`, `${CLASS_NAME}__button--minimize`)}
        onClick={handleMinimizeClick}
      >
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="4" rx="1" fill="white"/>
        </svg>
      </button>

      <button
        className={cn(`${CLASS_NAME}__button`, `${CLASS_NAME}__button--close`)}
        onClick={handleCloseClick}
      >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.63802 0.346339C1.87581 0.108553 2.26133 0.108553 2.49912 0.346339L15.9897 13.8369C16.2275 14.0747 16.2275 14.4602 15.9897 14.698L14.698 15.9897C14.4603 16.2274 14.0747 16.2274 13.8369 15.9897L0.34637 2.49909C0.108584 2.2613 0.108584 1.87578 0.34637 1.63799L1.63802 0.346339Z" fill="white"/>
          <path d="M15.9897 1.63799C16.2275 1.87578 16.2275 2.26131 15.9897 2.49909L2.49912 15.9897C2.26133 16.2274 1.87581 16.2274 1.63802 15.9897L0.346369 14.698C0.108583 14.4602 0.108583 14.0747 0.34637 13.8369L13.8369 0.346341C14.0747 0.108554 14.4603 0.108555 14.698 0.346341L15.9897 1.63799Z" fill="white"/>
        </svg>
      </button>
    </header>
  )
};
