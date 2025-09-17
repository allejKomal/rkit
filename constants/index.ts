import userImg from '../public/userImage.png';
import userPro2 from '../public/userProfile2.png';
import userPro3 from '../public/userProfile3.png';
import userPro4 from '../public/userProfile4.png';
import userPro from '../public/userProfile.png';

export const userImage = userImg;
export const userProfile = userPro.src;
export const userProfileList = [
  {
    fallback: 'JK',
    name: 'alleJKomal',
    url: userPro.src,
  },
  {
    fallback: 'SH',
    name: 'Sung Hoo',
    url: userPro2.src,
  },
  {
    fallback: 'BE',
    name: 'Beerus',
    url: userPro3.src,
  },
  {
    fallback: 'IQ',
    name: 'Igris',
    url: userPro4.src,
  },
];
