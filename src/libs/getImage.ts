const images = {
  imageBackgroundApp: require('~/resources/images/imageBackgroundApp.png'),

  //animation
  homeAnimate: require('~/resources/json/homeAnimation.json'),
  moon: require('~/resources/json/moon.json'),
  profile: require('~/resources/json/profile.json'),
  moon2: require('~/resources/json/music.json'),

  home: require('~/resources/images/BottomIcon/HomeIcon.png'),
  authenBackground: require('~/resources/images/authenBackground.png'),
  googleIcon: require('~/resources/images/googleIcon.png'),
  facebookIcon: require('~/resources/images/facebook.png'),
  appleIcon: require('~/resources/images/apple.png'),

  avatar: require('~/resources/images/BillieEllish.jpg'),

  topSong: require('~/resources/images/topsong.jpg'),
  topSong1: require('~/resources/images/topsong1.jpg'),
  topSong2: require('~/resources/images/topsong2.jpg'),
};

export default (imageName: keyof typeof images) => {
  return images[imageName];
};
