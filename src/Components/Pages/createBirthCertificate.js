import { useState } from "react";
import './createbirthcertificate.css';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../../Constant/Constant' 
import { useNavigate } from 'react-router-dom';

const CreateBirthCertificate = () => {
    const navigate = useNavigate();
    const [childName, setChildName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [location, setLocation] = useState('');

    const setChildData = async(e) =>{
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = signer.getAddress();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        const setChild = await contractInstance.addChildDetails(
        address, 
        childName,
        fatherName,
        motherName,
        dateOfBirth,
        location
        )
        console.log(setChild);
        alert("Transaction Completed");
        navigate('/');
    }

    return (
        <div className="container">
        <div className="form-container">
        <h2>Create Birth Certificate</h2>
        <form onSubmit={setChildData}>
          <div className="form-group">
            <input type="text" placeholder="Child's Name" value={childName} onChange={(e) => setChildName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Mother's Name" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <button type="submit">Create Birth Certificate</button>
        </form>
      </div>
    </div>
    )
}

export default CreateBirthCertificate;