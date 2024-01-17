import React, { useEffect, useState } from 'react';
import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  FunctionField,
} from 'react-admin';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';
import emailjs from 'emailjs-com';
const CameraDetail = (props) => {
  const { cctvId } = useParams();
  const [videoError, setVideoError] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    toast.success('Cctv recording and analyzing below', {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  }, []);

  const handleError = (error) => {
    console.error('Error loading video:', error);
    setVideoError(true);
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
  
    try {
      // Simulate analysis process
      const crimeDetected = 1;
      const resultMessage = crimeDetected ? 'Crime Detected' : 'No Crime Detected';
      setAnalysisResult(resultMessage);
  
      // Toast notification for analysis result
      toast.info(`Analysis Result: ${resultMessage}`, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    } finally {
      setAnalyzing(false);
    }
  };
  return (
    <div>
      <h2>Camera Detail</h2>
      <Show resource="cctvs" id={cctvId} {...props}>
        <SimpleShowLayout>
          <TextField source="id" label="CCTV ID" />
          <TextField source="Owner Name" label="Owner Name" />
          <TextField source="Contact Information" label="Contact Information" />
          <TextField source="Camera Type" label="Camera Type" />
          <TextField source="Location.Address" label="Location" />
          <DateField source="License Expiry Date" label="License Expiry Date" />
          <TextField source="License Status" label="License Status" />
          <FunctionField
            label="Status"
            render={(record) =>
              record.Status === 'Functioning' ? (
                <span style={{ color: 'green' }}>Functioning</span>
              ) : (
                <span style={{ color: 'red' }}>Non-functioning</span>
              )
            }
          />
        </SimpleShowLayout>
      </Show>

      {videoError ? (
        <div style={{ color: 'red' }}>Error loading video. Please check the URL.</div>
      ) : (
        <ReactPlayer
          url="/t_w012_converted.mp4"
          controls
          onError={handleError}
          style={{ maxWidth: '50%', height: '300px', marginBottom: '10px' }}
        />
      )}

      <button
        onClick={handleAnalyze}
        disabled={analyzing}
        style={{
          padding: '15px',
          fontSize: '18px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {analyzing ? 'Analyzing...' : 'Analyse!'}
      </button>

      {analysisResult && (
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          Analysis Result: {analysisResult}
        </div>
      )}

      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default CameraDetail;
