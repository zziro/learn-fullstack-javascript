import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest'
  };

  componetDidMount(){
      //timers, liteners
  }

  componentWillUnmount(){
     //clean times, listeners
  }

  render(){
    return (
      <div className="App">
          <Header message={this.state.pageHeader}/>
          <div>
              ...
          </div>
      </div>
    );
  }

};

export default App;
