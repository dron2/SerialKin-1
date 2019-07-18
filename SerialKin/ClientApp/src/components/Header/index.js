import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-icons-kit';
import { th } from 'react-icons-kit/fa/th';
import './styles.scss';
import { switchMenu } from '../../redux/actionCreators/system';
import Button from '../Button';

function Header(props) {
  const { switchMenu } = props;
  return (
    <header className="header">
      <Button className="button-icon" onClick={() => switchMenu()}>
        <div>
          <Icon size={30} icon={th} />
        </div>
      </Button>
      <Link to="/" className="title">SERIALKIN</Link>
      <div className="logo" />
      <span className="text">Сериалы Онлайн</span>
      <div className="grow" />
      <div className="auth-buttons">
        <Button>Регистрация</Button>
        <Button green className="header-button">Вход</Button>
      </div>
    </header>
  );
}

Header.propTypes = {
  switchMenu: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  switchMenu
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
