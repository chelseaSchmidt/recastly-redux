export const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.

  //return object:
    //type: CHANGE_VIDEO_LIST
    //videos: videos

  return {
    type: CHANGE_VIDEO_LIST,
    videos: videos
  };
};

export default changeVideoList;
