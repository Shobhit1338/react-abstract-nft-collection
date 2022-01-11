import React, {useState, useEffect} from 'react'
import instagramLogo from '../assets/Owner/instagram.png'
import twitterLogo from '../assets/Owner/twitter.png'
import moreIcon from '../assets/Owner/more.png'
import './Main.css'
const Main = ({selectedNft, listData }) => {
    const [activeNft, setActiveNft] = useState(listData[0])
    useEffect(() => {
        setActiveNft(listData[selectedNft])
    }, [listData, selectedNft] )
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='highlight'>
                    <div className='nftContainer'>
                        <img className='selectedNft' 
                        src={activeNft.image_original_url}
                        alt=''
                        />
                    </div>
                </div>
                <div className='nftDetails' style={{ color: '#fff' }}>
                    <div className='title'>
                        {activeNft.name}
                    <span className='itemNumber'>.#{activeNft.token_id}</span>
                </div>
                <div className='owner'>
                        <div className='ownerImage'>
                            <img src={activeNft.owner.profile_img_url}  alt=''/>
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div className='ether'>
                                <a href="https://rinkeby.etherscan.io/address/0x5e8827f888ba8319dc70712776d6d41f97bd14f0">Etherscan Address</a>
                                    </div>
                                <div className='ownerHandle'>@mrshobhit</div>
                                </div>
                                <div className='ownerLink'>
                                    <img src={instagramLogo} alt='' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={twitterLogo} alt='' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon} alt='' />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    ) 
}
export default Main