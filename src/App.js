import './App.css';
import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from './Constant/Constant' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Connected from './Components/Connected';
import Homepage from './Components/Pages/Homepage';
import CreateBirthCertificate from './Components/Pages/createBirthCertificate';
import CreateCollegeCertificate from './Components/Pages/createCollegeCertificate';
import Verifybirthcertificate from './Components/Pages/verifybirthcertificate';
import { Navbar } from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';

function App() {

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [childCount, setChildCount] = useState(0);
  const [gradCount, setGradCount] = useState(0);

  useEffect(() => {
    getChildCount();
    if(window.ethereum){
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if(window.ethereum){
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [account]);

  async function getChildCount() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const childs = await contractInstance.getChildCount(address);
    setChildCount(parseInt(childs, 16));
    console.log(childCount);
  }

  async function getGradCount() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const grads = await contractInstance.getGraduateCount(address);
    setGradCount(parseInt(grads, 16));
    console.log(gradCount);
  }  

  async function getAllChildData(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const count = childCount;

    for (let i = 0; i < count; i++) {
      const allChild = await contractInstance.childRecords(address, i);
      console.log(allChild);
    }
  }

  async function getAllGradData(){
    console.log("Here");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const count = gradCount;
    console.log(count);

    for (let i = 0; i < count; i++) {
      console.log(i);
      const grad = await contractInstance.graduateRecords(address, i);
      console.log(grad);
    }
  }

  const setChildData = async(e) =>{
    e.preventDefault();
    const data = e.target;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const setChild = await contractInstance.addChildDetails(
      address, 
      data.Child_Name.value,
      data.Father_Name.value,
      data.Mother_Name.value,
      data.Birth_Date.value,
      data.Birth_Location.value
    )
    console.log(setChild);
  }

  const setGradData = async(e) =>{
    e.preventDefault();
    const data = e.target;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const setGrad = await contractInstance.addGraduationDetails(
      data.student_name.value,
      data.date_of_birth.value,
      data.date_of_graduation.value,
      data.degree.value,
      address,
    )
    console.log(setGrad);
  }

  const verifyChild = async (e) => {
    e.preventDefault();
    const data = e.target;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const verify = await contractInstance.verifyChildDetails(
      address,
      data.child_name.value,
      data.date_of_birth.value,
      data.birth_location.value
    )

  }

  const verifyGrad = async (e) => {
    e.preventDefault();
    const data = e.target;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    const verify = await contractInstance.verifyGraduationDetails(
      address,
      data.student_name.value,
      data.date_of_birth.value,
      data.date_of_graduation.value,
      data.degree.value
    )

  }

  function handleAccountsChanged(accounts) {
    if(accounts.length > 0 && account !== accounts[0]){
      setAccount(accounts[0]);
    }
    else{
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask(){
    if(window.ethereum){
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask connected: " + address);
        setIsConnected(true);
      } catch(error){
        console.error(error);
      }
    } else {
      console.error("Metamask is not detected");
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        {isConnected ? (<Connected address = {account}/>) : (<Login connectWallet = {connectToMetamask}/>)}
        <Routes>
          <Route path='/' element= {<Homepage />}/>
          <Route path='/createbirthcertificate' element = {<CreateBirthCertificate />}/>
          <Route path='/createCollegeCertificate' element = {<CreateCollegeCertificate/>}/>
          <Route path='/verifybirthcertificate' element = {<Verifybirthcertificate/>}/>
        </Routes>
        <Footer />
      </Router>
      <button onClick={getChildCount}>GetChild Count</button>
      <button onClick={getAllChildData}>GetChilds</button>
      <button onClick={getGradCount}>GetGrad Count</button>
      <button onClick={getAllGradData}>GetGrads</button>
    </div>
  );
}

export default App;
