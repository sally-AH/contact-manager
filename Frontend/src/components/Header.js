import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Header = (props)=>  {

    return(
        <div className='flex space navbar bcg-dark'>
            <h1 >My Contacts</h1>
            <button className='add-btn' title="add" onClick={props.onClick}><FontAwesomeIcon icon={faPlus} beat/></button>
        </div>
    );
}

export default Header;