const postScore = async (url, addNewScore) => {
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#score').value);
  const newScore = {
    user,
    score,
  };

  await addNewScore(url, newScore);
};

export default postScore;
