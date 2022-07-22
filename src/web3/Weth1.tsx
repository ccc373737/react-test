import { useState, useEffect} from 'react';
import { ethers } from "ethers";
import { Button,List,Input } from 'antd';

declare let window:any

export default function Test() {

    const [balance, setBalance] = useState<string | undefined>()
    const [currentAccount, setCurrentAccount] = useState<string | undefined>()
    const [chainId, setChainId] = useState<number | undefined>()
    const [chainname, setChainName] = useState<string | undefined>()

    useEffect(() => {
        if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
        //client side code
        if(!window.ethereum) return
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        provider.getBalance(currentAccount).then((result)=>{
          setBalance(ethers.utils.formatEther(result))
        })
        provider.getNetwork().then((result)=>{
          setChainId(result.chainId)
          setChainName(result.name)
        })

        provider.getBlockNumber().then((result) => {
            console.log(result)
        })
    
    },[currentAccount])

    const onClickDisconnect = () => {
        console.log("onClickDisConnect")
        setBalance(undefined)
        setCurrentAccount(undefined)
    }

    const onClickConnect = () => {
        //client side code
        if(!window.ethereum) {
            console.log("please install MetaMask")
            return
        }
    
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        provider.send("eth_requestAccounts", [])
        .then((accounts)=>{
            if(accounts.length>0) {
                setCurrentAccount(accounts[0])
                console.log(accounts[0])
            }
        })
        .catch((e)=>console.log(e))
    }

    return (
       <div>
            <Button type="primary" onClick={onClickConnect}>Connect</Button>
            <Button type="primary" onClick={onClickDisconnect}>Disconnect</Button>

            <h2>{chainId}</h2>
            <h2>{chainname}</h2>
       </div>
    )
}