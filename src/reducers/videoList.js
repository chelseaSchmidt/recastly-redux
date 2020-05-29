import Redux from 'redux';
import {CHANGE_VIDEO_LIST} from '../actions/videoList.js';

//J : create new state object with modifications described by action
//I : initial state, action
//O : modified state
//C : don't mutate inputs
//E : no action or wrong action (return state)
//Ex: take the state and the action, do a modification described by the action
//    and return new state
var videoListReducer = (state = [], {type, videos}) => {
  //TODO: define a reducer for the videoList field of our state.
  //switch on action.type
  switch(type) {
    //case: action.type is CHANGE_VIDEO_LIST
    case CHANGE_VIDEO_LIST:
      return videos;
    //default:
    default:
      //return state that was passed in
      return state;
  }
};

export default videoListReducer;
