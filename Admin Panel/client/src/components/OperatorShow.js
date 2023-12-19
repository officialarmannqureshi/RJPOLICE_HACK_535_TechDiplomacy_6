import React from 'react';
import '../css/main.css';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const OperatorShow = (props) => (
    <Show {...props} >
        <SimpleShowLayout className='Parent'>
            
                <TextField label="Owner ID" source="OwnerID" />
                <TextField label="Owner Name" source="Owner Name" />
                <TextField label="Contact Information" source="Contact Information" />
                <TextField label="Camera Type" source="Camera Type" />
                <TextField label="Location" source="Location.Address" />
  
                
                <TextField label="Consent Status" source="Consent Status" />
                <TextField label="License Status" source="License Status" />
                <TextField label="Geotag ID" source="GeotagID" />
                <TextField label="Camera ID" source="CameraID" />
                <TextField label="Status" source="Status" />
                <TextField label="License Expiry Date" source="License Expiry Date" />
           
        </SimpleShowLayout>
    </Show>
);

export default OperatorShow;
