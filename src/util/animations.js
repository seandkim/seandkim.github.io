import $ from 'jquery';
import { TimelineMax, Power1 } from 'gsap';

export const getFocusAnimation = () => {
  const duration = 0.5;
  const rotationDegree = 180;
  const tl = new TimelineMax();
  tl.addLabel('start');
  // Resize the panels
  tl.fromTo($('.content-panel-wrapper'), 0.6,
    { width: '50vw' },
    { width: '100vw', ease: Power1.easeOut },
    'start',
  );

  // Logo
  tl.to($('#Logo'), duration, {
    x: -65, // TODO
  }, 'start');
  tl.to($('#Logo .logo-text'), duration, {
    scaleX: 0,
    rotation: rotationDegree,
    transformOrigin: 'center',
    opacity: 0,
  }, 'start');
  tl.from($('#Logo .back-arrow'), duration, {
    rotation: -rotationDegree,
    scaleX: 0,
    opacity: 0,
  }, 'start');

  // Nav Tabs
  tl.staggerTo($('.nav-tab'), duration, {
    scaleX: 0,
    opacity: 0,
    transformOrigin: '0 center',
  }, 0, 'start');

  // Door (for reverse animation)
  tl.fromTo($('.door-wrapper'), duration, {
    opacity: 1,
  }, {
    opacity: 0,
  });

  tl.pause();
  return tl;
}

export const getContentAnimation = () => {
  const tl = new TimelineMax();
  tl.addLabel('start', 0.7);
  tl.addLabel('body-start', "start+=0.7");

  tl.fromTo('#AboutContent .content-header', 0.5, {
    opacity: 0,
  }, {
    opacity: 1,
  }, "start");

  // Introduce content-body one by one
  tl.staggerFromTo($('#AboutContent .content-body div'), 2,
    { opacity: 0 },
    { opacity: 1 },
    0.2, 'body-start'
  )
}

export const dummy = () => {
  return null;
}