import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return null;
  }

};

export default currentVideoReducer;
