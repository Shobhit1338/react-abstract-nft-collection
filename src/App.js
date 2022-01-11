import './App.css';
import Header from './components/Header';
import './components/Header.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AbstractList from './components/AbstractList';
import Main from './components/Main';

function App() {
  const [listData, setListData] = useState([])
  const [selectedNft, setSelectedNft] = useState(0)
  useEffect(()=>{
    const getMyNfts=async()=>{
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x646B56b7775e357DA5c35Cd2f8441Bb6aC0EDce1&format=json&order_direction=asc'
      )
      setListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return (
    <div className='app'>
  <Header/>
  { listData.length > 0 && (
  <>
  <Main listData={listData} selectedNft={selectedNft}/>
  <AbstractList 
    listData={listData} 
    setSelectedNft={setSelectedNft} 
  />
  </>
    )}
    </div>
  )}
export default App;