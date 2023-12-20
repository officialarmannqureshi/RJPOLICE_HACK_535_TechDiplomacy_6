import React from 'react'
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';

const ViewCamera = (props) => {
    return (
        <div className="view-camera">
            <Button variant="contained" endIcon={<VideocamIcon/>} label="View all Cameras">
                View all Cameras
            </Button>
        </div>
    )
}

export default ViewCamera;
