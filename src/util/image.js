import { ABOUT_ME, PROJECTS, BIG_FISH } from './const';

// Images
import AboutCover from 'assets/cover/about.png';
import ProjectsCover from 'assets/cover/projects.JPG';
import BigFishCover from 'assets/cover/bigfish.png';
import GreyLinen from 'assets/texture/grey-linen.png';
import ShallowWater from 'assets/texture/shallow-water.png';

const darkGray = '#2E2E2D'; // about me
const olive = 'rgba(46, 76, 12, 0.82)'; // projects
const lightBlue = 'rgba(35, 127, 177, 0.6)'; // big fish

export const getBackgroundImageStyle = (pageName) => {
  // return;
  switch (pageName) {
    case ABOUT_ME:
      return {
        backgroundImage: `url(${AboutCover})`,
        backgroundPositionX: '-130px',
      };
    case PROJECTS:
      return {
        backgroundImage: `url(${ProjectsCover})`,
        backgroundPositionX: '-100px',
      };
    case BIG_FISH:
    default:
      return {
        backgroundImage: `url(${BigFishCover})`,
        backgroundPositionX: '-50px',
      };
  }
};

const setAlpha = (rgb, a) => {
  const rgba = rgb.replace(/rgb/i, 'rgba');
  return rgba.replace(/\)/i, `, ${a})`);
};

export const getGradientStyle = (pageName) => {
  let rgb;
  let textureImage;
  let imageAlpha;
  switch (pageName) {
    case ABOUT_ME:
      rgb = 'rgb(46, 46, 45)';
      break;
    case PROJECTS:
      rgb = 'rgb(46,76,12)';
      textureImage = GreyLinen;
      imageAlpha = 0.2;
      break;
    case BIG_FISH:
    default:
      // TODO: tile edge is showing at the right
      rgb = 'rgb(112, 171, 189)';
      textureImage = ShallowWater;
      imageAlpha = 0.2;
  }

  const black = 'rgb(0,0,0)';

  return {
    before: {
      color: {
        background: `linear-gradient(to right, ${setAlpha(rgb, 0)} 50%, ${setAlpha(rgb, 1)} 50%)`,
      },
      image: {
        background: `url(${textureImage})`,
        WebkitMaskImage: `-webkit-linear-gradient(right, ${setAlpha(rgb, imageAlpha)} 50%, rgba(0,0,0,0) 50%)`,
      },
    },
    after: {
      color: {
        background: `linear-gradient(to right, ${setAlpha(rgb, 0.3)} 5%, ${setAlpha(rgb, 1)} 15%)`,
      },
      image: {
        WebkitMaskImage: `-webkit-linear-gradient(right, ${setAlpha(black, imageAlpha)} 80%, rgba(0,0,0,0) 100%)`,
      },
    },
  };
};

export const getPanelColor = (pageName) => {
  switch (pageName) {
    case ABOUT_ME:
      return darkGray;
    case PROJECTS:
      return olive;
    case BIG_FISH:
    default:
      return lightBlue;
  }
};
