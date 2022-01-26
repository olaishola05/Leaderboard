import './style.css';
import showResults from './modules/views.js';
import { getGameResults, addNewScore } from './modules/fetch.js';
import postScore from './modules/posts.js';

const listContainer = document.querySelector('.score');
const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');
const API_KEY = 'USpt8mJC28TGhoqQtIJg';
const BASE_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`;

const toastMsg = async () => {
  const successMsg = document.querySelector('.success');
  successMsg.style.display = 'block';
  successMsg.textContent = 'Leaderboard score created correctly.';
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
};

const displayUI = async () => {
  const data = await getGameResults(BASE_URL);
  listContainer.innerHTML = showResults(data.result);
};

displayUI();

refreshBtn.addEventListener('click', () => {
  displayUI();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  postScore(BASE_URL, addNewScore);
  toastMsg();
  form.reset();
});
