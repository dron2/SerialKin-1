import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Icon from 'react-icons-kit';
import { rotateRight } from 'react-icons-kit/fa/rotateRight';
import './styles.scss';
import Card from '../../components/Card';
import { addSerials } from '../../redux/actionCreators/serials';

function Main(props) {
  const { serials, addSerials } = props;

  useEffect(() => {
    if (serials) return;
    axios
      .get('/db/serials.json')
      .then(({ data }) => addSerials(data))
      .catch(error => console.log(error));
  });

  return (
    <section className="main-page">
      <h1 className="title">Библиотека сериалов</h1>
      {
        serials ? 
          <div className="cards">
            {
              serials.map(serial => <Card key={serial.id} data={serial} />)
            }
          </div>
        :
        <div className="loading">
          <Icon className="icon" size={30} icon={rotateRight} />
          <span>Загрузка</span>
        </div>
      }
    </section>
  );
}

Main.propTypes = {
  serials: PropTypes.array,
  addSerials: PropTypes.func.isRequired
};

const mapStateToProps = ({ serials }) => ({ serials });

const mapDispatchToProps = dispatch => bindActionCreators({
  addSerials
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
