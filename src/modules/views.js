const showResults = (arr) => {
  let show = '';
  const msg = document.querySelector('.message');
  if (arr.length <= 0) {
    msg.style.display = 'flex';
    msg.textContent = 'Add new score to leaderboard';
    return show;
  }

  arr.forEach((result) => {
    show += `<li>${result.name}: <span>${result.score}</span></li>`;
  });

  return show;
};

export default showResults;
