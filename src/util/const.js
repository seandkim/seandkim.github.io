export const ABOUT_ME = 'About Me';
export const PROJECTS = 'Projects';
export const BIG_FISH = 'Big Fish';

export const PAGE_NAMES = [
  ABOUT_ME,
  PROJECTS,
  BIG_FISH,
];

// TODO: delete?
export const PAGE_CONFIG = {};
PAGE_CONFIG[ABOUT_ME] = {
  imageName: 'AboutCover',
  darkenRatio: 0.1,
  sideColor: 'darkGray',
  sideTexture: null,
};

PAGE_CONFIG[PROJECTS] = {
  imageName: 'ProjectsCover',
  darkenRatio: 0.33,
  sideColor: 'olive',
  sideTexture: 'grey-linen',
};

PAGE_CONFIG[BIG_FISH] = {
  imageName: 'ProjectsCover',
  darkenRatio: 0.33,
  sideColor: 'lightBlue',
  sideTexture: 'shallow-water',
};

export const SMALL_DEVICE = 'SMALL DEVICE';
export const LARGE_DEVICE = 'LARGE DEVICE';
