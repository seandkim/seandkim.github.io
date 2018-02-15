const initialState = {
  currentPageName: 'about me',
  focused: false,
  media: 'small',
};

const pageReducer = (state = initialState, action) => {
  console.log('pageReducer start with action=', action);

  switch (action.type) {
  case 'CHANGE_MEDIA':
    if (['small', 'large'].indexOf(action.media) !== -1) {
      return {
        ...state,
        media: action.media,
      };
    } else {
      console.error('invalid action');
    }
    break;
  case 'CHANGE_PAGE':
    if (['about_me', 'projects', 'big_fish'].indexOf(action.pageName) !== -1) {
      return {
        ...state,
        pageName: action.pageName,
        focused: false,
      };
    } else {
      console.error('invalid action');
    }
    break;
  case 'CHANGE_FOCUS':
    if ([true, false].indexOf(action.focused) !== -1) {
      return {
        ...state,
        focused: action.focused,
      };
    } else {
      console.error('invalid action');
    }
    break;
  default:
    return state;
  }
  return state;
};

export default pageReducer;