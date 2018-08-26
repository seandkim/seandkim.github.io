export const changeMedia = media => ({
  type: 'CHANGE_MEDIA',
  media, // {string}: <refer to const.js>
});

export const changePage = pageName => ({
  type: 'CHANGE_PAGE',
  pageName, // {string}: <refer to const.js>
});

export const stepToPage = step => ({
  type: 'STEP_TO_PAGE',
  step,
});

export const changeFocus = focused => ({
  type: 'CHANGE_FOCUS',
  focused, // {boolean} true, false
});
