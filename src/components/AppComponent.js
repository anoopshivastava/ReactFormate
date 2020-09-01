import React from 'react';
import VideoContainer from '../containers/VideoContainer';
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div className="">
        <div className="">
          <VideoContainer />
         </div>
       
      </div>
    )
  }
}

export default AppComponent;
