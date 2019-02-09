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

export const getGradientStyle = (pageName) => {
  switch (pageName) {
    case ABOUT_ME:
      return {
        color: {
          background: 'linear-gradient(to right, rgba(46,46,45,0) 40%, rgba(46,46,45,1) 50%)',
        },
        image: {
        },
      };
    case PROJECTS:
      return {
        color: {
          background: 'linear-gradient(to right, rgba(46,76,12,0) 40%, rgba(46,76,12,100) 50%)',
        },
        image: {
          background: `url(${GreyLinen})`,
          WebkitMaskImage: '-webkit-linear-gradient(right, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 70%)',
        },
      };
    case BIG_FISH:
    default:
      return {
        color: {
          backgroundImage: 'linear-gradient(to right, rgba(112, 171, 189, 0) 40%, rgba(112, 171, 189, 1) 50%)',
          // background: 'rgba(113, 159, 184, 1)',
        },
        image: {
          background: `url(${ShallowWater})`,
          WebkitMaskImage: '-webkit-linear-gradient(right, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 50%)',
        },
      };
  }
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
