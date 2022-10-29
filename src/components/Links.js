import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import slack from '../images/download.png'

function Links() {
  return (
    <div className='links'>
        <a href='https://twitter.com/adetomiwa_akin/status/1548012467741024257?s=21'>
            <button id='twitter-link'>Twitter link</button>
        </a>

        <a href='https://training.zuri.team'>
            <button id='btn__zuri'>Zuri Team</button>
        </a>

        <a href='http://books.zuri.team'>
            <button id='books' title='zuri books'>Zuri Books</button>
        </a>

        <a href='https://books.zuri.team/python-for-beginners?ref_id=Adetomiwa'>
            <button id='btn__python'>Python Books</button>
        </a>

        <a href='https://backgroung.zuri.team'>
            <button id='pitch'>Background checks on coders</button>
        </a>

        <a href='https://books.zuri.team/design-rules'>
            <button id='book__design'>Design Books</button>
        </a>
        <div className='base-icon'>
            <i className='slack'><img src={slack} /></i>
            <i className='git'><AiFillGithub /></i>
        </div>
    </div>
  )
}

export default Links