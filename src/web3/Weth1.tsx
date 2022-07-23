import { useState, useEffect} from 'react';
import { ethers } from "ethers";
import { Button,List,Input } from 'antd';
import WETH from "../contract/WETH.json";

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

    const onClickTransfer = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        // Sending 1 ETH
        const tx = signer.sendTransaction({
            to: WETH.address,
            value: ethers.utils.parseEther("1.0")
        });
    }

    const onClickCallContract = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const address  = WETH.address;
        const abi = WETH.abi;

        const contract = new ethers.Contract(address, abi, signer);

        contract.on("Deposit", (addr, amount, event) => {
            console.log("Deposit event11111");
            console.log(addr);
            console.log(amount);
            console.log(event);
        });

        // Sending 1 ETH
        contract.deposit({value: ethers.utils.parseEther("0.2")});
    }

    const onClickWithdraw = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const address  = WETH.address;
        const abi = WETH.abi;

        const contract = new ethers.Contract(address, abi, signer);

        contract.on("Withdraw", (addr, amount, event) => {
            console.log("Withdraw event11111");
            console.log(addr);
            console.log(ethers.utils.formatEther(amount));
            console.log(event);
        });

        // Sending 1 ETH
        contract.withdraw(ethers.utils.parseEther("0.3"));
    }

    const onClickGetContractBalance = async() => {
        const provider = ethers.providers.getDefaultProvider('ropsten');

        const balance = await provider.getBalance(WETH.address);
        console.log(ethers.utils.formatEther(balance));
    
    }

    const onClicGet = async() => {
        const contractProvider = ethers.providers.getDefaultProvider('ropsten');
        const address  = WETH.address;
        const abi = WETH.abi;

        const contract = new ethers.Contract(address, abi, contractProvider);

        const myBalance = await contract.balanceOf(currentAccount);
        console.log(ethers.utils.formatEther(myBalance));
    }

    return (
       <div>
            <Button type="primary" onClick={onClickConnect}>Connect</Button>
            <Button type="primary" onClick={onClickDisconnect}>Disconnect</Button>
            <Button type="primary" onClick={onClickGetContractBalance}>GetContractBalance</Button>
            <Button type="primary" onClick={onClicGet}>GET</Button>
            <Button type="primary" onClick={onClickTransfer}>Transfer</Button>
            <Button type="primary" onClick={onClickCallContract}>CallContract</Button>
            <Button type="primary" onClick={onClickWithdraw}>Withdraw</Button>

            <h2>{chainId}</h2>
            <h2>{chainname}</h2>
       </div>
    )
}