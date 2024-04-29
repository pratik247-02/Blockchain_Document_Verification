import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../../Constant/Constant';

const Displaycollegecertificate = () => {
    const [gradCount, setGradCount] = useState(0);
    const [gradDetails, setGradDetails] = useState([]);

    useEffect(() => {
        getGradCount();
    }, []);

    async function getGradCount() {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
            const grads = await contractInstance.getGraduateCount(address);
            setGradCount(parseInt(grads, 16));
            getAllGradData(contractInstance, address, parseInt(grads, 16));
        } catch (error) {
            console.error("Error getting graduate count:", error);
        }
    }

    async function getAllGradData(contractInstance, address, count) {
        try {
            const gradDetailsArray = [];
            for (let i = 0; i < count; i++) {
                const grad = await contractInstance.graduateRecords(address, i);
                gradDetailsArray.push(grad);
            }
            setGradDetails(gradDetailsArray);
        } catch (error) {
            console.error("Error getting all graduate data:", error);
        }
    }

    return (
        <div className="certificate-container">
            <h2>COLLEGE CERTIFICATE</h2>
            <div className="certificate-card">
                {gradDetails.map((grad, index) => (
                    <div className="grad-card" key={index}>
                        <div className="grad-details">
                            <p><strong>Graduate's Name:</strong> {grad.graduate_name}</p>
                            <p><strong>Degree Start Year:</strong> {grad.degree}</p>
                            <p><strong>Graduation Year:</strong> {grad.graduation_year}</p>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Displaycollegecertificate;
