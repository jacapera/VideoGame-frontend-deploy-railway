import React from 'react';
import style from './NotFound.module.css';
import image from '../../assets/pngwing.com.png';
import { useLocation } from 'react-router-dom';

const NotFound = () => {

  const location = useLocation();

  return (
    <div className={`${style.notfound} ${location.pathname === "/" && style.notfoundIsLandingPage}`}>
      <h1>ERROR 404 - PÁGINA NO ENCONTRADA</h1>
      <img className={style.image} src={image} alt="notfound homero" />
    </div>
  )
}

export default NotFound