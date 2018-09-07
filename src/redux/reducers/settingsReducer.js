import initialState from '../initialState';
import { SAVE_SETTINGS } from '../actions/types';

const INITIAL_STATE = initialState.settings;

export default function (state = INITIAL_STATE, action = {}) {
  switch (action) {
    case SAVE_SETTINGS:
      return { ...state };
    default:
      return state;
  }
}
