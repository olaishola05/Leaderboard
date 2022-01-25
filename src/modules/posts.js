const postScore = async (callback) => {
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#score').value);
  const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const name = 'Chess';

  const newScore = {
    name,
    user,
    score,
  };

  await callback(BASE_URL, newScore);
};

export default postScore;
