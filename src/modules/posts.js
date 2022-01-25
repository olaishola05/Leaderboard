const postScore = async (url, callback) => {
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#score').value);
  const name = 'Chess';

  const newScore = {
    name,
    user,
    score,
  };

  await callback(url, newScore);
};

export default postScore;
