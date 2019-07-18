import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.scss';

function Card(props) {
  const { link, title, image } = props.data;

  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <Link to={link}>
          <Button green>
            Смотреть
          </Button>
        </Link>
      </div>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
