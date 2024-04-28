import React, { useState } from 'react';
import './createcollegecertificate.css';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../../Constant/Constant' 
import { useNavigate } from 'react-router-dom';

const CreateCollegeCertificate = () => {
    const navigate = useNavigate();
    const [studentName, setStudentName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [yearOfAddmission, setYearOfAddmission] = useState('');
    const [yearOfGraduation, setYearOfGraduation] = useState('');

    const setGradData = async(e) =>{
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = signer.getAddress();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        const setChild = await contractInstance.addGraduationDetails(
        address, 
        studentName,
        branchName,
        yearOfAddmission,
        yearOfGraduation,
        )
        console.log(setChild);
        alert("Transaction Completed");
        navigate('/');
    }

  return (
    <div className="container">
        <div className="form-container">
        <h2>Create Graduation Certificate</h2>
        <form onSubmit={setGradData}>
          <div className="form-group">
            <input type="text" placeholder="Student's Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Branch Name" value={branchName} onChange={(e) => setBranchName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Year of Addmission" value={yearOfAddmission} onChange={(e) => setYearOfAddmission(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Year of Graduation" value={yearOfGraduation} onChange={(e) => setYearOfGraduation(e.target.value)} />
          </div>
          <button type="submit">Create Graduation Certificate</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCollegeCertificate;
