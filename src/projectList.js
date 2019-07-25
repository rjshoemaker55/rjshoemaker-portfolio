/* eslint-disable global-require */
const CapDatGifSC = require('./images/Cap-Dat-Gif-Screenshot.png');

const data = [
  {
    id: 1,
    title: 'Songlyrically',
    description: 'A lyric app that also lets users transalte lyrics and watch music videos.',
    role: 'Front end/back end developer',
    image: require('./images/Songlyrically-Screenshot.png'),
    repo: 'https://github.com/JoeySuc89/Songlyrically',
    deployed: 'http://songlyrically.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Cap-Dat-Gif',
    description: "A fun app that lets users caption gifs they serch for, then view and upvote others' creations.",
    role: 'Front end/back end developer',
    image: CapDatGifSC,
    repo: require('./images/Cap-Dat-Gif-Screenshot.png'),
    deployed: 'https://rjerykevanjoe.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Bill-Keeper (in progress)',
    description: 'A bill tracking app that offers a simple notepad-like approach to keep track of your finances.',
    role: 'Sole developer',
    image: require('./images/Bill-Keeper-Screenshot.png'),
    repo: 'https://github.com/rjshoemaker55/bill-keeper',
    deployed: 'https://rjshoemaker55.github.io/bill-keeper/',
  },
  {
    id: 4,
    title: 'Habits 66 (in progress)',
    description: 'A habit tracking app that encourages users to stick to their goals by tracking progress.',
    role: 'Back end developer',
    image: CapDatGifSC,
    repo: 'https://github.com/Mhr85/habits',
    deployed: 'https://habits66.herokuapp.com/',
  },
];

module.exports = data;
