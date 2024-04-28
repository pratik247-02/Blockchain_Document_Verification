import './displaycertificate.css'; 
import { useNavigate } from 'react-router-dom';

export const Display = () => {
    const navigate = useNavigate();

    const handleClick = (certificateType) => {
    if (certificateType === 'birth') {
        navigate('/displaybirthcertificate');
    } else if (certificateType === 'college') {
        navigate('/displaycollegecertificate');
    }
    };

    return (
    <div className="create-certificate-container">
        <h2 className="create-certificate-heading">DISPLAY CERTIFICATES</h2>
        <div className="certificate-buttons">
        <button onClick={() => handleClick('birth')}>BIRTH CERTIFICATE</button>
        <button onClick={() => handleClick('college')}>COLLEGE CERTIFICATE</button>
        </div>
    </div>
    );
}