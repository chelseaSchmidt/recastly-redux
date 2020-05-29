import Redux from 'redux';
import {initialState} from './main.js';
import {CHANGE_VIDEO} from '../actions/currentVideo.js';

var currentVideoReducer = (state = null, {type, video}) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //if type is CHANGE_VIDEO
  if (type === CHANGE_VIDEO) {
    return video;
  } else {
  //else
    //return input state
    return state;
  }
};

export default currentVideoReducer;

