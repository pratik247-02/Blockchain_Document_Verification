import React, { useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../../Constant/Constant';
import { useNavigate } from 'react-router-dom';

const Verifybirthcertificate = () => {
    const navigate = useNavigate();
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [birthLocation, setBirthLocation] = useState('');
    const [verificationResult, setVerificationResult] = useState('');

    const verifyChild = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        try {
            const verify = await contractInstance.verifyChildDetails(
                address,
                childName,
                dateOfBirth,
                birthLocation
            );
            if (verify) {
                setVerificationResult('verified');
            } else {
                setVerificationResult('not verified');
            }
        } catch (error) {
            console.error("Error verifying child:", error);
            setVerificationResult('error');
        }
    }

    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <h2>Verify Birth Certificate</h2>
                    <form onSubmit={verifyChild}>
                        <div className="form-group">
                            <input type="text" placeholder="Child's Name" value={childName} onChange={(e) => setChildName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Birth Location" value={birthLocation} onChange={(e) => setBirthLocation(e.target.value)} />
                        </div>
                        <button type="submit">Verify Child</button>
                    </form>
                </div>
            </div>
            {verificationResult && (
                <div>
                    {verificationResult === 'verified' && (
                        <div>
                            <p>Child is verified.</p>
                            <button onClick={() => alert("Verified")}>Proceed</button>
                        </div>
                    )}
                    {verificationResult === 'not verified' && <p>Child is not verified.</p>}
                    {verificationResult === 'error' && <p>Error verifying child.</p>}
                </div>
            )}
        </div>
    );
}

export default Verifybirthcertificate;
