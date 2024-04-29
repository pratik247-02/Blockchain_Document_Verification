import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../../Constant/Constant';
import './displaybirthcertificate.css';

const DisplayBirthCertificate = ({ allChild }) => {
    const [childCount, setChildCount] = useState(0);
    const [allChildDetails, setAllChildDetails] = useState([]);
    const [issuedTo, setIssuedTo] = useState('');

    useEffect(() => {
        getChildCount();
    }, []);

    async function getChildCount() {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setIssuedTo(address); 
            const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
            const childs = await contractInstance.getChildCount(address);
            setChildCount(parseInt(childs, 16));
            getAllChildData(contractInstance, address, parseInt(childs, 16));
        } catch (error) {
            console.error("Error getting child count:", error);
        }
    }

    async function getAllChildData(contractInstance, address, count) {
        try {
            const childDetailsArray = [];
            for (let i = 0; i < count; i++) {
                const allChild = await contractInstance.childRecords(address, i);
                childDetailsArray.push(allChild);
            }
            setAllChildDetails(childDetailsArray);
        } catch (error) {
            console.error("Error getting all child data:", error);
        }
    }

    return (
        <div className="certificate-container">
            <h2>BIRTH CERTIFICATE</h2>
            <div className="certificate-card">
                {allChildDetails.map((child, index) => (
                    <div className="child-card" key={index}>
                        <div className="child-details">
                            <p><strong>Child's Name:</strong> {child.child_name}</p>
                            <p><strong>Father's Name:</strong> {child.child_father_name}</p>
                            <p><strong>Mother's Name:</strong> {child.child_mother_name}</p>
                            <p><strong>Date of Birth:</strong> {child.birth_date}</p>
                            <p><strong>Birth Location:</strong> {child.birth_location}</p>
                            {/* <p><strong>Issued To:</strong> {issuedTo}</p>  */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayBirthCertificate;
