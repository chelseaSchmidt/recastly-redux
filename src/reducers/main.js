import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// export const initialState = {
//   videos: [],
//   currentVideo: {},
//   searchString: ''
// };

//Combine reducers and return combined version
//Redux.combineReducers
var rootReducer = combineReducers({
    currentVideo,
    videoList
});

export default rootReducer;
