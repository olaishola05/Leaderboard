const showResults = (arr) => {
  let show = '';
  const msg = document.querySelector('.message');
  if (arr.length <= 0) {
    show = `<li class='msg'>${msg.textContent}</li>`;
    return show;
  }

  arr.forEach((result) => {
    show += `<li>${result.name}: <span>${result.score}</span></li>`;
  });

  return show;
};

export default showResults;
