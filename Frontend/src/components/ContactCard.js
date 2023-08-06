import React from 'react';

const  ContactCard = (props) => {
   
    return(
        <div className='flex-column card-item' onClick={props.onClick}>
            <div className='flex card-header'>
                <h3>{props.name}</h3>
            </div>
            <div className='flex-column card-body'>
                <div>Phone: {props.phone}</div>
                <div>latitude: {props.latitude}</div>
                <div>longitude: {props.longitude}</div>
            </div>

        </div>

    );
}

export default ContactCard;