import React, { useState } from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import {useNavigate } from 'react-router-dom';
const ViewCamera = (props) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleCameraAccess = () => {
        const hasAccess = document.getElementById("Access").innerHTML;
        if (hasAccess === "Granted") {
            setLoading(true);
            navigate('/view-cameras');

            setTimeout(() => {
                setLoading(false);
            }, 2000); // 2 seconds


        }
    };

    return (
        <div className="view-camera">
            <Button
                variant="contained"
                endIcon={<VideocamIcon />}
                label="View all Cameras"
                onClick={handleCameraAccess}
                disabled={loading}
            >
                View all Cameras
            </Button>
            {loading && (
                <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                    <h1>Loading...</h1>
                </div>
            )}
        </div>
    );
};

export default ViewCamera;
