const postScore = async (url, callback) => {
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#score').value);
  const newScore = {
    user,
    score,
  };

  await callback(url, newScore);
};

export default postScore;
