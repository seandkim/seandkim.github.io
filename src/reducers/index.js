const initialState = {
  currentPageName: 'about me',
  focused: false,
  media: 'small',
};

const pageNames = ['about me', 'projects', 'big fish'];

const pageReducer = (state = initialState, action) => {
  // console.log('pageReducer start with action=', action);

  switch (action.type) {
  case 'CHANGE_MEDIA':
    if (['small', 'large'].indexOf(action.media) !== -1) {
      return {
        ...state,
        media: action.media,
      };
    }
    console.error('invalid action');
    break;
  case 'CHANGE_PAGE':
    if (pageNames.indexOf(action.pageName) !== -1) {
      return {
        ...state,
        currentPageName: action.pageName,
        focused: false,
      };
    }
    console.error('invalid action');
    break;
  case 'STEP_TO_PAGE':
    if (typeof (action.step) === 'number') {
      const currIndex = pageNames.indexOf(this.state.currentPageName);
      return {
        ...state,
        currentPageName: pageNames[(currIndex + action.step) % pageNames.length],
      };
    }
    console.error('Step is not a number');
    break;
  case 'CHANGE_FOCUS':
    if ([true, false].indexOf(action.focused) !== -1) {
      return {
        ...state,
        focused: action.focused,
      };
    }
    console.error('invalid action');
    break;
  default:
    return state;
  }
  return state;
};

export default pageReducer;
