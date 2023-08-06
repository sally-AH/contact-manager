import React,{useState, useEffect} from 'react';
import ContactCard from './ContactCard';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import GetMap from './GetMap';

const Contacts =  ()=> {

    let [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts();
      }, []);

    const getContacts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get_contacts');
            setContacts(response.data.contacts);
            contacts=response.data;

        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    }; 


    const [showMap, setShowMap] = useState(false);
    const [selectedCoordinates, setSelectedCoordinates] = useState({ latitude: 0, longitude: 0 });
    const handleCardClick = (name, latitude, longitude) => {
        setSelectedCoordinates({name, latitude, longitude });
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };


    
    const mapping = (arr)=>{
        const contacts = arr.map(contact=> <ContactCard
                                    key={contact.id}
                                    name= {contact.name}
                                    phone={contact.phone}
                                    latitude= {JSON.parse(contact.latitude)}
                                    longitude= {JSON.parse(contact.longitude)}
                                    onClick= {()=>handleCardClick(contact.name, contact.latitude, contact.longitude)}
                                />
                        );
        return contacts;
    }

    return(
        <div>
            <div className='flex cards'>
             {mapping (contacts)}
            </div>
            {showMap && (
                <GetMap
                    name = {selectedCoordinates.name}
                    latitude={selectedCoordinates.latitude}
                    longitude={selectedCoordinates.longitude}
                    onClose={handleCloseMap}
                />
            )}
        </div>
        
    );
}

export default Contacts;