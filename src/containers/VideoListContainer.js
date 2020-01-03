import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// var VideoListContainer = () => {
//   const mapStateToProps = (state) => ({videos: state.videos});
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       changeVideoList: (videos) => dispatch(changeVideo(videos))
//     };
//   };
//   return connect(mapStateToProps, mapDispatchToProps)(VideoList);
// };

var VideoListContainer = connect(
  (state) => ({videos: state.videoList}),
  (dispatch) => ({handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))})
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
