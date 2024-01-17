import React from 'react';
import '../css/main.css';
import { Show, SimpleShowLayout, TextField, useRecordContext } from 'react-admin';
// import ViewCamera from './ViewCamera.js'
import CameraDetails from './CameraDetail.js';
import { useState } from "react";
import Button from "@mui/material/Button";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useNavigate } from "react-router-dom";

const ViewCamera = (props) => {
    const record = useRecordContext();
    const navigate = useNavigate();
  
    // Function to handle button click and navigate to the desired page
    const handleCameraAccess = () => {
      if (record && record.id) {
        console.log(record);
        navigate('view-analyze');
      }
    };

  return (
    <div className="view-camera">
      <Button
        variant="contained"
        endIcon={<VideocamIcon />}
        // to={`/cctvs/${record.id}/show/view-analyze`}
        // disabled={loading}
        onClick={handleCameraAccess}
        
      >
        View Camera & Analyse the CCTV
      </Button>
    </div>
  );
};

const OperatorShow = (props) => (

    <Show {...props} >
        <SimpleShowLayout className='Parent'>
            <TextField label="Owner ID" source="OwnerID" />
            <TextField label="Owner Name" source="Owner Name" />
            <TextField label="Contact Information" source="Contact Information" />
            <TextField label="Camera Type" source="Camera Type" />
            <TextField label="Location" source="Location.Address" />
            <TextField label="License Status" source="License Status" />
            <TextField label="Camera ID" source="CameraID" />
            <TextField label="Status" source="Status" />
            <TextField label="License Expiry Date" source="License Expiry Date" />
        </SimpleShowLayout>
        <ViewCamera>
        </ViewCamera>
    </Show>
);

export default OperatorShow;
