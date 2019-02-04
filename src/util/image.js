import { ABOUT_ME, PROJECTS, BIG_FISH } from './const';

// Images
import AboutCover from '../assets/cover/about.png';
import ProjectsCover from '../assets/cover/projects.JPG';
import BigFishCover from '../assets/cover/bigfish.png';

const darkGray = '#2E2E2D'; // about me
const olive = 'rgba(46, 76, 12, 0.82)'; // projects
const lightBlue = 'rgba(35, 127, 177, 0.6)'; // big fish

export const getBackgroundImageStyle = (pageName) => {
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

export const getPanelGradientStyle = (pageName) => {
  switch (pageName) {
    case ABOUT_ME:
      return {
        // background: 'linear-gradient(to right, rgba(46,46,45,0) 0%, rgba(46,46,45,1) 90%)',
      };
    case PROJECTS:
      return {
        // background: 'linear-gradient(to right, rgba(46,46,45,0) 40%, rgba(46,46,45,1) 55%)',
      };
    case BIG_FISH:
    default:
      return {
        // background: 'linear-gradient(to right, rgba(46,46,45,0) 40%, rgba(46,46,45,1) 55%)',
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

export const dummy = 'DUMMY';
