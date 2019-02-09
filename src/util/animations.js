import $ from 'jquery';
import { TimelineMax, Power2 } from 'gsap';

const initLogoAnimation = (tl, duration) => {
  const rotationDegree = 180;
  // TODO: delete
  // tl.fromTo($('#Logo'), duration, {
  //   x: 0, // TODO
  // }, {
  //   // x: -65,
  // }, 'start');
  tl.fromTo($('#Logo .logo-text'), duration, {
    rotation: 0,
    scaleX: 1,
    opacity: 1,
  }, {
    rotation: rotationDegree,
    transformOrigin: 'center',
    scaleX: 0,
    opacity: 0,
  }, 'start');
  tl.fromTo($('#Logo .back-arrow'), duration, {
    rotation: -rotationDegree,
    scaleX: 0,
    opacity: 0,
  }, {
    rotation: 0,
    scaleX: 1,
    opacity: 1,
  }, 'start');
};

const initContentAnimation = (tl, duration) => {
  tl.fromTo($('.gradient-color'), duration, {
    // TODO: set using image.js
    // backgroundImage: 'linear-gradient(to right, rgba(112, 171, 189, 0) 50%, rgba(112, 171, 189, 1) 50%)',
  }, {
    // backgroundImage: 'linear-gradient(to right, rgba(112, 171, 189, 0) 10%, rgba(112, 171, 189, 1) 20%)',
  }, 'start');

  tl.fromTo($('.gradient-image'), duration, {
    // TODO: set using image.js
    // WebkitMaskImage: '-webkit-linear-gradient(right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%)',
  }, {
    // WebkitMaskImage: '-webkit-linear-gradient(right, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 90%)',
  }, 'start');
};

const initDoorAnimation = (tl, duration) => {
  tl.fromTo($('.door-wrapper'), duration, { opacity: 1 }, { opacity: 0 }, 'start');
};

export const initLargeFocusAnimation = () => {
  const duration = 0.4;
  const tl = new TimelineMax();
  tl.addLabel('start');

  initLogoAnimation(tl, duration);

  // Nav Tabs
  tl.staggerFromTo($('.nav-tab'), duration, {
    scaleX: 1,
    opacity: 1,
  }, {
    scaleX: 0,
    opacity: 0,
    transformOrigin: '0 center',
  }, 0, 'start');

  initDoorAnimation(tl, duration); // for reverse animation
  initContentAnimation(tl, duration);

  tl.pause();
  return tl;
};

export const initSmallFocusAnimation = () => {
  const duration = 0.4;
  const tl = new TimelineMax();
  tl.addLabel('start');
  initLogoAnimation(tl, duration);
  initDoorAnimation(tl, duration);
  initContentAnimation(tl);
  tl.pause();
  return tl;
};
