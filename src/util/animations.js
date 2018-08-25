import $ from 'jquery';
import { TimelineMax, Power2 } from 'gsap';

export const getLargeFocusAnimation = () => {
  const duration = 0.4;
  const rotationDegree = 180;
  const tl = new TimelineMax();
  tl.addLabel('start');
  // Resize the panels
  tl.fromTo($('.content-panel-wrapper'), 0.6,
    { width: '50vw' },
    { width: '90vw', ease: Power2.easeOut },
    'start');

  // Logo
  tl.fromTo($('#Logo'), duration, {
    x: 0, // TODO
  }, {
    x: -65,
  }, 'start');
  tl.fromTo($('#Logo .logo-text'), duration, {
    scaleX: 1,
    rotation: 0,
    opacity: 1,
  }, {
    scaleX: 0,
    rotation: rotationDegree,
    transformOrigin: 'center',
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

  // Nav Tabs
  tl.staggerFromTo($('.nav-tab'), duration, {
    scaleX: 1,
    opacity: 1,
  }, {
    scaleX: 0,
    opacity: 0,
    transformOrigin: '0 center',
  }, 0, 'start');

  // Door (for reverse animation)
  tl.fromTo($('.door-wrapper'), duration, {
    opacity: 1,
  }, {
    opacity: 0,
  }, 'start');

  // Content
  tl.addLabel('content-start', 0.6);
  tl.addLabel('body-start', 'content-start+=0.4');
  tl.addLabel('reverse-start', 'body-start+=1.1');

  tl.fromTo('#AboutContent .content-header', 0.5, {
    opacity: 0,
  }, {
    opacity: 1,
  }, 'content-start');

  // Introduce content-body one by one
  tl.staggerFromTo($('#AboutContent .content-body div'), 2,
    { opacity: 0 },
    { opacity: 1 },
    0.2, 'body-start');

  tl.pause();
  return tl;
};

export const getSmallFocusAnimation = () => {
};
