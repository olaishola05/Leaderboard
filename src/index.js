import _ from 'lodash';
import './style.css';
import result from './modules/results.js';
import showResults from './modules/views.js';
import { getGameResults, addNewScore } from './modules/fetch.js';
import postScore from './modules/posts.js';

const listContainer = document.querySelector('.score');
const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');
const API_KEY = 'ReaRxw1XixIwt45w5rra ';
const BASE_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`;

refreshBtn.addEventListener('click', () => {
  getGameResults(BASE_URL);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  postScore(BASE_URL, addNewScore);
  form.reset();
});

listContainer.innerHTML = showResults(result);
