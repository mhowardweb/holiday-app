/**
 * Your redux actions go here, there is no middleware enabled by default so you may want to use Thunk or Sagas in order to dispatch asyncronous actions
 */
import { SAVE_SETTINGS } from './types';

export function saveSettings(data) {
  return {
    type: SAVE_SETTINGS,
    payload: { data },
  };
}
