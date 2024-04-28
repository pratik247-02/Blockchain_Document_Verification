import './verifycertificate.css'; 
import { useNavigate } from 'react-router-dom';

export const Verify = () => {
    const navigate = useNavigate();

    const handleClick = (certificateType) => {
    if (certificateType === 'birth') {
        navigate('/verifybirthcertificate');
    } else if (certificateType === 'college') {
        navigate('/verifycollegecertificate');
    }
    };

    return (
    <div className="create-certificate-container">
        <h2 className="create-certificate-heading">CHECK VALIDATION OF YOUR CERTIFICATES</h2>
        <div className="certificate-buttons">
        <button onClick={() => handleClick('birth')}>BIRTH CERTIFICATE</button>
        <button onClick={() => handleClick('college')}>COLLEGE CERTIFICATE</button>
        </div>
    </div>
    );
}