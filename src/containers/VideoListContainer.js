import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//This will be a function that contains mapStateToProps, mapDispatchToProps,
//ReactRedux.connect --> calls connect() and applies to React component

var VideoListContainer = () => {

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

//mapStateToProps
  //function that takes a state object and returns another object with a videos
  //field pointing to state.videos
const mapStateToProps = state => {videos: state.videos};

//mapDispatchToProps
  //function that takes a dispatch function and returns an object with an
  //updateVideos field pointing to a function that creates a new videos update
  //action and passes it to the dispatch function
const mapDispatchToProps = dispatch => {
  return {
    updateVideos: (video) => {
      dispatch(changeVideo(video));
    }
  }
};

//connect
  //call ReactRedux.connect with mapState.. and mapDispatch... and call returned
  //function on the component

return connect(mapStateToProps, mapDispatchToProps)(VideoList);
};

export default VideoListContainer;
