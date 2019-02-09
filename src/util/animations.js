import $ from 'jquery';
import { TimelineMax, Power2 } from 'gsap';
import { getGradientStyle } from 'util/image';
import { SMALL_DEVICE } from './const';

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

const initGradientAnimation = (tl, duration, currentPageName) => {
  const gradientStyle = getGradientStyle(currentPageName);
  tl.fromTo($('.gradient-color'), duration, gradientStyle.before.color, gradientStyle.after.color, 'start');
  tl.fromTo($('.gradient-image'), duration, gradientStyle.before.image, gradientStyle.after.image, 'start');
};

const initDoorAnimation = (tl, duration) => {
  tl.fromTo($('.door-wrapper'), duration, { opacity: 1 }, { opacity: 0 }, 'start');
};

export const initFocusAnimation = (currentPageName, media) => {
  if (media === SMALL_DEVICE) {
    const duration = 0.4;
    const tl = new TimelineMax();
    tl.addLabel('start');
    initLogoAnimation(tl, duration);
    initDoorAnimation(tl, duration);
    initGradientAnimation(tl);
    tl.pause();
    return tl;
  }

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
  initGradientAnimation(tl, duration, currentPageName);

  tl.pause();
  return tl;
};

export const dummy=3;