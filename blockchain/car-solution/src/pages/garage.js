import './create.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Journal from '../artifacts/contracts/Journal.sol/Journal.json'

const journalAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"


function Garage() {

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
        var jour = ""
        for (var item in data.journal) {
          jour += item + "\n"
        }
        setJournal(jour)
        setCar(<div class="Item">
        immatriculation: 
        {data.id}<br/>
        appartient à: 
        {data.owner}<br/>
        Journal:<br/>
        {journal}
        <input type="text" id="repair" name="repair" onChange={OnRepair} ></input>
        <button onClick={() => repairCar(message, repair)}>Ajouter une entrée</button>
    </div>)
      }
      catch (err) {
        console.log("error: ", err)
      }
    }
  }

  async function repairCar(immatriculation, entry) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.BrowserProvider(window.ethereum)
      console.log('provider: ', await provider.getNetwork())
      const signer = await provider.getSigner()
      console.log('signer: ', (await signer).getAddress())
      const contract = new ethers.Contract(journalAddress, Journal.abi, signer)
      console.log('contract: ', (await contract).getAddress())
      const transaction = await contract.reparerVoiture(immatriculation, 0, entry)
      await transaction.wait()
    }
  }

  const [message, setMessage] = useState('')
  const [repair, setRepair] = useState('')
  const [car, setCar] = useState([]);
  const [journal, setJournal] = useState('')

  const OnChange = (event) => {
    setMessage(event.target.value)
  }

  const OnRepair = (event) => {
    setRepair(event.target.value)
  }

  return (
    <div className="Create">
        <input type="text" id="message" name="message" onChange={OnChange} value={message}/>
        <button onClick={() => getCar(message)}>Rechercher une voiture</button>
        {car}
    </div>
  );
}

export default Garage;