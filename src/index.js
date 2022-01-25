import _ from 'lodash';
import './style.css';
import result from './modules/results.js';
import showResults from './modules/views.js';

const component = () => {
  const element = document.createElement('div');
  const listContainer = document.querySelector('.score');
  listContainer.innerHTML = showResults(result);

  element.innerHTML = _.join(' ');

  return element;
};

document.body.appendChild(component());
