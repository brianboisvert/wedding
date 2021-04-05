import React from 'react';
import Contact from './Contact';

class Invitation extends React.Component {

  constructor() {
  super();
    this.state = {
    };
  }


  render() {

    return (
      <div>
        <div className='invitation'>
          <div>Brian & Sam, Wedding</div><br />
          <div>November Sixth 2021</div><br />
          <div>The Foundry, New York City</div><br />
          <div>Formal Invitation to Follow</div><br />
          <div className='arrow'>↓</div>
        </div>
          <div><Contact /></div>
      </div>
    )
  }
}



export default Invitation;
