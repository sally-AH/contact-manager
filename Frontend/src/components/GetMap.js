import React,{Component,useState, useEffect} from 'react';
import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const GetMap = (props)=>{
    const custmIcon = new Icon ({
        iconUrl:require("./location-pin.png"),
        iconSize:[38,38]
    })
    return (

        <div className="map-overlay">
            <button onClick={props.onClose} className="close-button" title="close"><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#4f3b55",}} spin/></button>
            <MapContainer center={[props.latitude,  props.longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={custmIcon}>
                    <Popup>
                    <h2>Hello {props.name}</h2>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>


    );

}
export default GetMap;