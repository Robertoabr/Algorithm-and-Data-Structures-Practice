let photoSRCs = [
  'https://secure.img1-fg.wfcdn.com/im/53299221/compr-r85/4307/43074449/hanging-pug-puppy-statue.jpg',
  'https://vetmed.illinois.edu/wp-content/uploads/2017/12/pc-keller-hedgehog.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cute-fluffy-animals-coverimage.jpg',
  'https://data.whicdn.com/images/133986302/superthumb.jpg?t=1409010786',
  'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1810/sonsedskaya181000026/110717011-funny-portrait-of-cute-pets-isolated-on-white-background.jpg'
];

let mainImg = document.querySelector('.main-img');
let leftB = document.querySelector('.left-button');
let rightB = document.querySelector('.right-button');

mainImg.src = photoSRCs[1];
leftB.onclick = shiftLeft;
rightB.onclick = shiftRight;

function shiftLeft() {
  photoSRCs.unshift(photoSRCs.pop());
  mainImg.src = photoSRCs[1];
}

function shiftRight() {
  photoSRCs.push(photoSRCs.shift());
  mainImg.src = photoSRCs[1];
}
