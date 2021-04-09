import React from 'react';
import Contact from './Contact';
import Contact2 from './Contact2';

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
          <div className='invite'>Formal Invitation to Follow</div>
          <span className='logistics'>
            <span className='hotel'>hotel blocks: </span>
            <a href='https://www.thewilliamvale.com/'>william vale, </a>
            <a href='https://thehoxton.com/williamsburg/'>williamsburg, </a>
            <a href='https://www.ravelhotel.com/'>ravel</a>
            <span className='separator'> // </span>
            <span className='label'>contact: </span>
            <a href='mailto:boisvertlight@gmail.com'>boisvertlight@gmail.com</a>
          </span>
        </div>
      </div>
    )
  }
}



export default Invitation;
