import React,{useState, useEffect} from 'react';
import AddContact from './AddContact';
import Header from './Header';
import Contacts from './Contacts';


const App = ()=> {
    const [showMap, setShowMap] = useState(false);
    const handleCardClick = () => {
        setShowMap(true);
    };
    const handleCloseMap = () => {
        setShowMap(false);
    };
    return(
        <div className='flex-column'>
            <Header onClick={handleCardClick}/>
            <Contacts/>
            {showMap && (<AddContact onClose={handleCloseMap}/>)}
        </div>
    );

}

export default App;