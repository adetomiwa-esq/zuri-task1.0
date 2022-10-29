import React from 'react';
import {} from 'react-icons';
import world from '../images/ingressive.jpeg'

function Footer() {
  return (
    <div className='footer'>
        <div className='zuri'>Zuri<span className='dot'>.</span>Internship</div>
        <div className='hng'>HNG Internship 9 Frontend Task</div>
        <div className='footer-end'>
            <div><img className='world' src={world} /></div>
            <div>
                <div>INGRESSIVE</div>
                <div>FOR GOOD</div>
            </div>
        </div>
    </div>
  )
}

export default Footer