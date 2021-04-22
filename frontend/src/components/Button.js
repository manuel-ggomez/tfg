import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <Link to={props.link}>
      <button className='btn'>{props.text}</button>
    </Link>
  );
}

export default Button;
