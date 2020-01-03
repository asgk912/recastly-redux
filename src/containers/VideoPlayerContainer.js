import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var mapStateToProps = (state) => ({video: state.currentVideo};
// var mapDispatchToProps = null;

var VideoPlayerContainer = connect(
  (state) => ({video: state.currentVideo}) // mapStateToProps
)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
