import initialState from '../initialState';

const INITIAL_STATE = initialState.holiday;

export default function (state = INITIAL_STATE, action = {}) {
  switch (action) {
    default:
      return state;
  }
}
