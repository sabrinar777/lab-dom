let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const titleChange = () => {
    document.querySelector('#main-title').innerText = 'Hello, I am DOM';
  }
  titleChange();

  // Part 2
  const changeBackground = () => {
    document.body.style.backgroundColor = 'blue';
  }
  changeBackground();

  // Part 3
  const removeFavorite = () => {
    const favThings = document.querySelector('#favorite-things');
    favThings.removeChild(favThings.lastElementChild);
  }
  removeFavorite();

  // Part 4
  const changeFont = () => {
    const specialTitle = document.querySelectorAll('.special-title');
    specialTitle.forEach(element => element.style.fontSize = '2rem');
  }
  changeFont();

  // Part 5
  const removeChicago = () => {
    const raceList = document.querySelector('#past-races');
    raceList.removeChild(raceList.children[3]);
  }
  removeChicago();

  // Part 6
  const addRace = () => {
    const raceList = document.getElementById('past-races');
    const newLi = document.createElement('li');
    newLi.innerText = 'New York';
    raceList.appendChild(newLi);
  }
  addRace();

  // Part 7
  const createBlogPost = () => {
    let div = document.querySelector('.main')
    let newDiv = document.createElement('div');
    newDiv.className = 'blog-post purple';

    var newHeader = document.createElement('h1');
    newHeader.innerText = 'New York';

    var newPara = document.createElement('p');
    newPara.innerText = 'I RACED IN NEW YORK!'

    newDiv.appendChild(newHeader);
    newDiv.appendChild(newPara);
    div.appendChild(newDiv);
  }
  createBlogPost();
}