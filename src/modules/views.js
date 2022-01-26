const showResults = (arr) => {
  let show = '';
  const msg = document.querySelector('.message');
  if (arr.length <= 0) {
    show = `<li class='msg'>${msg.textContent}</li>`;
    return show;
  }

  arr = arr.sort((x, y) => y.score - x.score);
  arr.forEach((result) => {
    show += `<li>${result.user}: <span>${result.score}</span></li>`;
  });

  return show;
};

export default showResults;
