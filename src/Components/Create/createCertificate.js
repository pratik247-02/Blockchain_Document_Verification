import React from 'react';
import './createcertificate.css'; 
import { useNavigate } from 'react-router-dom';

export const CreateCertificate = () => {
    const navigate = useNavigate();

    const handleClick = (certificateType) => {
      if (certificateType === 'birth') {
        navigate('/createbirthcertificate');
      } else if (certificateType === 'college') {
        navigate('/createcollegecertificate');
      }
    };
  
    return (
      <div className="create-certificate-container">
        <h2 className="create-certificate-heading">CREATE A NEW CERTIFICATE</h2>
        <div className="certificate-buttons">
          <button onClick={() => handleClick('birth')}>BIRTH CERTIFICATE</button>
          <button onClick={() => handleClick('college')}>COLLEGE CERTIFICATE</button>
        </div>
      </div>
    );
}
