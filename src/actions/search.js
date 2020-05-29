import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//J: return a function that kicks off an async process
//  that will result in the appropriate action being dispatched
// I: youtube search query
// O: a function which does some other stuff
// C: none
// E: query might be undefined/empty string
// Ex: return a function that takes the query string
//  and passes it into searchYoutube, then calls an action creator based on what it is
var handleVideoSearch = (q) => {
  return (dispatch) => {
    const options = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };
    searchYouTube(options, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  }
};

export default handleVideoSearch;
