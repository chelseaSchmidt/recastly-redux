export const CHANGE_VIDEO = 'CHANGE_VIDEO';

// action = {type, video object}
var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.

  //return object:
    //type: "CHANGE_VIDEO"
    //video: video
  return {
    type: CHANGE_VIDEO,
    video: video
  }
};

export default changeVideo;
