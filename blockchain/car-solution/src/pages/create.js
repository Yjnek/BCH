import './create.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Journal from '../artifacts/contracts/Journal.sol/Journal.json'

const journalAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"


function Create() {

  // request access to the user's account. This works regardless of the wallet you're using. 
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getCar(immatriculation) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum)
      console.log('provider: ', await provider.getNetwork())
      const contract = new ethers.Contract(journalAddress, Journal.abi, provider)
      try {
        const data = await contract.getVoiture(immatriculation)
        console.log('data: ', data)
      }
      catch (err) {
        console.log("error: ", err)
      }
    }
  }

  async function createCar(immatriculation) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.BrowserProvider(window.ethereum)
      console.log('provider: ', await provider.getNetwork())
      const signer = await provider.getSigner()
      console.log('signer: ', (await signer).getAddress())
      const contract = new ethers.Contract(journalAddress, Journal.abi, signer)
      console.log('contract: ', (await contract).getAddress())
      const transaction = await contract.createCar(immatriculation)
      await transaction.wait()
    }
  }

  const [message, setMessage] = useState('')

  const OnChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="Create">
        <input type="text" id="message" name="message" onChange={OnChange} value={message}/>
        <button onClick={() => createCar(message)}>Enregistrer une voiture</button>
    </div>
  );
}

export default Create;