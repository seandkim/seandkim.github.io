import { SMALL_DEVICE, LARGE_DEVICE, PAGE_NAMES, ABOUT_ME, BIG_FISH } from '../util/const';

const initialState = {
  currentPageName: BIG_FISH,
  focused: false,
  media: SMALL_DEVICE,
};

const pageReducer = (state = initialState, action) => {
  // console.log('pageReducer start with action=', action);
  switch (action.type) {
    case 'CHANGE_MEDIA':
      if ([SMALL_DEVICE, LARGE_DEVICE].indexOf(action.media) !== -1) {
        return {
          ...state,
          media: action.media,
          focused: false,
        };
      }
      console.error('invalid action');
      break;
    case 'CHANGE_PAGE':
      if (PAGE_NAMES.indexOf(action.pageName) !== -1) {
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
        const currIndex = PAGE_NAMES.indexOf(this.state.currentPageName);
        return {
          ...state,
          currentPageName: PAGE_NAMES[(currIndex + action.step) % PAGE_NAMES.length],
          focused: false,
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
