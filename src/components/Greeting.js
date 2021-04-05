import React from 'react';
import '../App.css'
import handleViewport from 'react-in-viewport';


class Greeting extends React.Component {

  constructor() {
  super();
    this.state = {
      visible: true,
      count: 0,
      inViewport: false
    };
  }

  componentDidMount() {
  this.interval = setInterval(() => this.setState({
    visible: this.state.visible === true ? false : true,
    count: this.state.count += 1
  }),
  60);
}

stopInterval() {
  clearInterval(this.interval);
}

  render() {

    let std;
    if (this.state.visible === true) {
      std = <div className='visible greeting'><div className='visible'>SAVE THE</div><br/><div className='visible'>DATE</div></div>
    } else {
      std = <div className='notVisible greeting'>SAVE THE DATE</div>
    }

    if (this.state.count > 30) {
      this.stopInterval();
      this.props.changeComponent('Invitation');
    }

    return (
      <div>
        <div>{std}</div>
      </div>
    )
  }
}



export default Greeting;
