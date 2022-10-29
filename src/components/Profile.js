import React from 'react';
import ProfilePic from '../images/profile-img.JPG';
import { RiShareForwardLine } from 'react-icons/ri'
import { AiOutlineEllipsis } from 'react-icons/ai'

function Profile() {
  return (
    <div className='profile'>
        <div className='share'>
          <i className='forward'><RiShareForwardLine /></i>
          <i className='ellipsis'><AiOutlineEllipsis /></i>
        </div>
        <div className='profile-box'>
            <img id='profile__img' src={ProfilePic} />
        </div>
        <div id='twitter'>Adetomiwa_akin</div>
        <div id='slack'>Adetomiwa</div>
    </div>
  )
}

export default Profile