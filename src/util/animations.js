import $ from 'jquery';
import { TimelineMax } from 'gsap';

export const initFocusAnimation = () => {
  const duration = 0.4;
  const rotationDegree = 180;
  const tl = new TimelineMax();
  tl.add('start');
  // Resize the panels
  tl.fromTo($('.content-panel-wrapper'), duration,
  { width: '50vw' },
  { width: '100vw' }, 'start');

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

  tl.pause();
  return tl;
}

export const dummy = () => {
  return null;
}