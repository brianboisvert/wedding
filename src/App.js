import './App.css';
import Greeting from './components/Greeting';
import Invitation from './components/Invitation';
import React from 'react';


class App extends React.Component {

  constructor() {
  super();
    this.state = {
      component: 'Greeting'
    };
  }

  changeComponent(newComponent){
    // console.log(newComponent);
    this.setState({
      component: newComponent
    })
  };

  render() {
    let component;
    if (this.state.component === 'Greeting') {
      component = <Greeting changeComponent={this.changeComponent.bind(this)}/>
    } else if (this.state.component === 'Invitation') {
      component = <Invitation />
    }

    return (
      <div className="App">
        <div className='container'>{component}</div>
      </div>
    )
  }
}



export default App;
