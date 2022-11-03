import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import slack from '../images/download.png';
import {Link} from 'react-router-dom'

function Links() {
  return (
    <div className='links'>
        <a className='button' href='https://twitter.com/adetomiwa_akin/status/1548012467741024257?s=21' id='twitter-link'>
            Twitter link
        </a>

        <a className='button' href='https://training.zuri.team' id='btn__zuri'>
            Zuri Team
        </a>

        <a className='button' href='http://books.zuri.team' id='books' title='zuri books'>
           <sub> Zuri Books</sub>
        </a>

        <a className='button' href='https://books.zuri.team/python-for-beginners?ref_id=Adetomiwa' id='btn__python'>
            <sub>Python Books</sub>
        </a>

        <a className='button' href='https://backgroung.zuri.team' id='pitch'>
            <sub>Background checks on coders</sub>
        </a>

        <a className='button' href='https://books.zuri.team/design-rules' id='book__design'>
           <sub> Design Books</sub>
        </a>

        <Link to='/contact'><a className='button' href='/contact' id='contact'>
           Contact Me
        </a></Link>
        <div className='base-icon'>
            <i className='slack'><img src={slack} /></i>
            <i className='git'><AiFillGithub /></i>
        </div>
    </div>
  )
}

export default Links