const btn = document.querySelector('.btn');
const memeImg = document.querySelector('.memeimg');
const title = document.querySelector('.tit');
const madeBy = document.querySelector('.maidby');

const memes = [
  {
    imgSrc: 'img/l06v7.jpg',
    titleText: 'Meme 1 Title',
    madeByText: 'Created by: Creator 1'
  },
  {
    imgSrc: 'img/dbab3a0c536c7bbd9ddd81f7f1e2f12d.jpg',
    titleText: 'Meme 2 Title',
    madeByText: 'Created by: Creator 2'
  },
  {
    imgSrc: 'img/clean-memes.jpg',
    titleText: 'Meme 3 Title',
    madeByText: 'Created by: Creator 3'
  },
  {
    imgSrc: 'img/B3qaZuaD.jpeg',
    titleText: 'Meme 4 Title',
    madeByText: 'Created by: Creator 4'
  },
  {
    imgSrc: 'img/12814204_1078909515535435_7361825125800936279_n.jpg',
    titleText: 'Meme 5 Title',
    madeByText: 'Created by: Creator 5'
  },
  // Add more meme objects as needed
];

let currentMemeIndex = 0;

function updateMeme() {
  const currentMeme = memes[currentMemeIndex];
  memeImg.src = currentMeme.imgSrc;
  title.textContent = currentMeme.titleText;
  madeBy.textContent = currentMeme.madeByText;
}

updateMeme();

btn.addEventListener('click', function() {
  currentMemeIndex = (currentMemeIndex + 1) % memes.length;
  updateMeme();
});