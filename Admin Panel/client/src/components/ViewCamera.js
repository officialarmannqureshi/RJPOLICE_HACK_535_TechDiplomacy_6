import React, { useState } from "react";
import Button from "@mui/material/Button";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useNavigate } from "react-router-dom";

export const ViewCamera = (props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle button click and navigate to the desired page
  const handleCameraAccess = () => {
    // You can replace 'view-analyze' with the actual name of your route
    navigate('/:id/view-analyze');
  };

  return (
    <div className="view-camera">
      <Button
        variant="contained"
        endIcon={<VideocamIcon />}
        disabled={loading}
        onClick={handleCameraAccess}
      >
        View Camera & Analyse the CCTV
      </Button>
    </div>
  );
};

export default ViewCamera;
