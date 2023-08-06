import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';



const AddContact = (props)=> {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const createContact = async (e) => {
        e.preventDefault()
        const formData =  new FormData()
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)

        await axios.post('http://127.0.0.1:8000/api/add_contacts', formData)
        .then(({data})=>{
            toast.fire({
                icon:'success',
                title:"Success",
            })

        })
        .catch(({response})=>{

        })

    }


    return(
        <div id="id01" className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close" title="close">&times;</span>
                <h1>Add Contact</h1>
                <input className='input' type="text"  placeholder="Name" required onChange={(event)=>{setName(event.target.value)}}/>
                <input className='input' type="text"  placeholder="Phone" required onChange={(event)=>{setPhone(event.target.value)}}/>
                <input className='input' type="text"  placeholder="latitude" required onChange={(event)=>{setLatitude(event.target.value)}}/>
                <input className='input' type="text"  placeholder="longitude" required onChange={(event)=>{setLongitude(event.target.value)}}/>
                <div className="clearfix">
                    <button type="button" className="add-button" onClick={createContact}>Add Contact</button>
                </div>
            </div>
        </div>
    );
}

export default AddContact;



