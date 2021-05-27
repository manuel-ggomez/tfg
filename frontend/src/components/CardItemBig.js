import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap-big' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className='cards__item__text' style={{fontFamily: 'Header', fontWeight: 'bold', fontSize: '20px'}}>{props.text}</div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
