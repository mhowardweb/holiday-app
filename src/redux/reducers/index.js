import { combineReducers } from 'redux';
import settings from './settingsReducer';
import holiday from './holidayReducer';
import summary from './summaryReducer';

const reducers = {
  settings,
  summary,
  holiday,
};

export default combineReducers(reducers);
