import { connect } from 'react-redux';
import VideoComponent from '../components/VideoComponent';
import { setScreen } from '../actions';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const VideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoComponent);

export default VideoContainer;
