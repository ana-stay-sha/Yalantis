import React from 'react';
import './App.css';
import Months from '../months/Months'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
    }
}
  render(){
    return (
      <div className="App">
        <Months />

      </div>
    );
  }
}

export default App;
