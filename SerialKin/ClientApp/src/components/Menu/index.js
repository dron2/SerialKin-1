import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Icon from 'react-icons-kit';
import { thList } from 'react-icons-kit/fa/thList';
import { hashtag } from 'react-icons-kit/fa/hashtag';
import './styles.scss';

function Menu(props) {
  const { isMenuOpen } = props;
  return (
    <nav
      className={classnames(
        'main-menu',
        isMenuOpen ? 'open' : ''
      )}
    >
      <ul>
        <li className="title">
          <Icon size={27} icon={thList} />
          <span>Меню</span>
        </li>
        <li className="item">
          <Link to="/">Главная страница</Link>
        </li>
        <li className="item">
          <Link to="/multserials">Мультсериалы</Link>
        </li>
        <li className="title">
          <Icon size={27} icon={hashtag} />
          <span>Теги</span>
        </li>
        <li className="item">
          <Link to="/fox">#FOX</Link>
        </li>
        <li className="item">
          <Link to="/cc">#COMEDY CENTRAL</Link>
        </li>
        <li className="item">
          <Link to="/cn">#CARTOON NETWORK</Link>
        </li>
        <li className="item">
          <Link to="/netflix">#NETFLIX</Link>
        </li>
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
};

const mapStateToProps = ({ system: { isMenuOpen } }) => ({ isMenuOpen });

export default connect(mapStateToProps)(Menu);
