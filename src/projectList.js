/* eslint-disable global-require */

const data = [
  {
    id: 1,
    title: 'Songlyrically',
    description:
      'A lyric app that also lets users transalte lyrics and watch music videos.',
    role: 'Front end/back end developer',
    image: require('./images/Songlyrically-Screenshot.png'),
    repo: 'https://github.com/JoeySuc89/Songlyrically',
    deployed: 'http://songlyrically.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Cap-Dat-Gif',
    description:
      "A fun app that lets users caption gifs they serch for, then view and upvote others' creations.",
    role: 'Front end/back end developer',
    image: require('./images/Cap-Dat-Gif-Screenshot.png'),
    repo: 'https://github.com/JoeySuc89/Cap-Dat-Gif',
    deployed: 'https://rjerykevanjoe.herokuapp.com/'
  },
  {
    id: 3,
    title: 'My Concierge (in progress)',
    description: 'A simple, elegant virtual travel assistant.',
    role: 'Sole developer',
    image: require('./images/My-Concierge-Screenshot.png'),
    repo: 'https://github.com/rjshoemaker55/myconcierge',
    deployed: 'https://rjshoemaker55.github.io/myconcierge/'
  },
  {
    id: 4,
    title: 'Survival Kits (in progress)',
    description: 'A website for a company that builds and sells survival kits.',
    role: 'Sole developer',
    image: require('./images/Survival-Kits-Screenshot.png'),
    repo: 'https://github.com/rjshoemaker55/survival-kits',
    deployed: 'https://rjshoemaker55.github.io/dylanssite/'
  }
];

module.exports = data;
