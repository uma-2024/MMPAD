import React, { useEffect, useState } from 'react';
import './Stacking.css';
import wallet from '../assets/Images/ion_wallet.svg';
import golden from '../assets/Images/golden-tier 1.png';
import useWagmiReadMethod from '../Hooks/wagmiReadMethod';
import tokenAbi from "../ABI/Token.abi.json"
import StakingContractAbi from "../ABI/StakingContract.abi.json"
import { useAccount, useWaitForTransaction } from 'wagmi';
import useWagmiWriteMethod from '../Hooks/wagmiWriteMethod';
import LoadingModal from './Modal/LoadingModal';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const Stacking = () => {
    const { address } = useAccount();
    const { open, close } = useWeb3Modal()
    
    const MMT_TOKEN_ADDRESS = "0x714aEb9Ec400AE05e039C7Fd9Fc9548A058352A3";
    const STAKING_TOKEN_ADDRESS = "0x81315Eda6552b7507fa8486015Aa65b5a65595d6";
    const [allowance, setAllowance] = useState(0);
    const [inputValues, setInputValues] = useState(['', '', '']);
    const [tnxHash, setTnxHash] = useState("")
    const [approveAmount, setApproveAmount] = useState(0)
    const { isError, isLoading, isSuccess } = useWaitForTransaction({
        hash: tnxHash,
    })
    const { method: readAllowanceMethod } = useWagmiReadMethod(tokenAbi, MMT_TOKEN_ADDRESS, "allowance", [address, STAKING_TOKEN_ADDRESS]);
    const { method: approveMethod, hash: approveTxHash } = useWagmiWriteMethod(tokenAbi, MMT_TOKEN_ADDRESS, "approve");
    const { method: stakeMethod, hash: stakeHash } = useWagmiWriteMethod(StakingContractAbi, "0x81315Eda6552b7507fa8486015Aa65b5a65595d6", "stake");


    const handleApprove = async (approveAmountValue) => {
        const txHash = await approveMethod([STAKING_TOKEN_ADDRESS, approveAmountValue]);
        setTnxHash(txHash)
        console.log('Transaction Hash:', txHash);
    };

    const handleStaking = async (stakeAmountValue, packageIndex) => {
        const txHash = await stakeMethod([stakeAmountValue, packageIndex]);
        setTnxHash(txHash)
        console.log('Transaction Hash:', txHash);
    };

    useEffect(() => {
        const readAllowanceData = async () => {
            try {
                const data = await readAllowanceMethod();
                if (data >= 0) {
                    setAllowance(data);
                }
            } catch (error) {
                console.log("Error in readAllowanceData:", error);
            }
        };
        if (address) {
            readAllowanceData();
        }
    }, [address, isSuccess]);

    const handleInputChange = (index) => (e) => {
        const value = e.target.value;
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleStack = (index) => async () => {
        const value = inputValues[index];

        if (value) {
            console.log(`Stacking from input ${index}: ${value}`);

            // Determine if we need to approve or stake
            const inputValue = parseFloat(value);

            if (index === 0) {
                if (allowance >= inputValue) {
                    // Call stake method
                    console.log("Staking...");
                    await handleStaking(inputValue * 10 ** 18, 0)
                    // Replace with your stake logic
                } else {
                    // Call approve method
                    console.log("Approving...", inputValue);
                    setApproveAmount(inputValue * 10 ** 18); // Set the amount directly in Wei
                    await handleApprove(inputValue * 10 ** 18);
                    // Replace with your approve logic
                }
            } else if (index === 1) {
                if (allowance >= inputValue) {
                    // Call stake method
                    console.log("Staking...");
                    await handleStaking(inputValue * 10 ** 18, 1)

                    // Replace with your stake logic
                } else {
                    // Call approve method
                    console.log("Approving...", inputValue);
                    setApproveAmount(inputValue * 10 ** 18); // Set the amount directly in Wei
                    await handleApprove(inputValue * 10 ** 18);

                    // Replace with your approve logic
                }
            } else if (index === 2) {
                if (allowance >= inputValue) {
                    // Call stake method
                    console.log("Staking...");

                    await handleStaking(inputValue * 10 ** 18, 2)

                    // Replace with your stake logic
                } else {
                    // Call approve method
                    console.log("Approving...", inputValue);
                    setApproveAmount(inputValue * 10 ** 18); // Set the amount directly in Wei
                    await handleApprove(inputValue * 10 ** 18);
                    // Replace with your approve logic
                }
            }
        }
    };

    const inlinecss = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        transition: '0.3s',
        fontSize: '16px',
        height: "40px"
    };

    // Disable conditions for buttons based on input values
    const isButtonDisabled = (index) => {
        const value = parseFloat(inputValues[index]);

        if (index === 0) {
            // Disable if input is empty or not less than 500
            return !value || value >= 500;
        } else if (index === 1) {
            // Disable if input is empty, less than 500, or greater than or equal to 1000
            return !value || value < 500 || value >= 1000;
        } else if (index === 2) {
            // Disable if input is empty or less than 1000
            return !value || value < 1000;
        }

        return false;
    };

    return (
        <div className='stacking'>
            <h2><span>MMIT’s</span> Staking</h2>
            <div className='stack-card'>
                <div className='stack-card01'>
                    <div>
                        <h1>POD-1</h1>
                    </div>
                    <img src={golden} alt='' />
                </div>
                <div className='stack-card02'>
                    <div>
                        <div className='stack-card-details'>
                            <p>Apr</p>
                            <p>20%</p>
                        </div>
                        <div className='stack-card-details'>
                            <p>Locking Period</p>
                            <p>360 Days</p>
                        </div>
                        <div className='stack-card-details'>
                            <input
                                type='text'
                                value={inputValues[0]}
                                onChange={handleInputChange(0)}
                                placeholder='< 500'
                                style={inlinecss}
                            />
                        </div>
                        <div className='stack-card-details'>
                            {
                                !address ? <button className="d-hero-g-btn" onClick={open}>{"Connect Wallet"}</button> :
                                    <button onClick={handleStack(0)} disabled={isButtonDisabled(0)} title={isButtonDisabled(0) && "Invalid input"}>
                                        {allowance >= parseFloat(inputValues[0]) ? 'Stake' : 'Approve'}
                                    </button>
                            }

                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="730" height="12" viewBox="0 0 830 12" fill="none">
                        <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM829.773 6L824 0.226497L818.227 6L824 11.7735L829.773 6ZM6 7H824V5H6V7Z" fill="#757575" fillOpacity="0.5" />
                    </svg>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '100%' }}></div>
                    </div>
                    <div className='stack-card-3'>
                        <h5>Reward Start</h5>
                        <div>
                            <span>After 100 Days Of Stacking</span>
                        </div>
                        <button className='mobile-button'>Stack</button>
                    </div>
                </div>
            </div>
            <div className='stack-card card22'>
                <div className='stack-card02'>
                    <div>
                        <div className='stack-card-details'>
                            <p>Apr</p>
                            <p>25%</p>
                        </div>
                        <div className='stack-card-details'>
                            <p>Locking Period</p>
                            <p>360 Days</p>
                        </div>
                        <div className='stack-card-details'>
                            <input
                                type='text'
                                value={inputValues[1]}
                                onChange={handleInputChange(1)}
                                placeholder='>= 500 & < 1000'
                                style={inlinecss}
                            />
                        </div>
                        <div className='stack-card-details'>
                        {
                                !address ? <button className="d-hero-g-btn" onClick={open}>{"Connect Wallet"}</button> :
                            <button onClick={handleStack(1)} disabled={isButtonDisabled(1)} title={isButtonDisabled(1) && "Invalid input"}>
                                {allowance >= parseFloat(inputValues[1]) ? 'Stake' : 'Approve'}
                            </button>}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="730" height="12" viewBox="0 0 830 12" fill="none">
                        <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM829.773 6L824 0.226497L818.227 6L824 11.7735L829.773 6ZM6 7H824V5H6V7Z" fill="#757575" fillOpacity="0.5" />
                    </svg>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '100%' }}></div>
                    </div>
                    <div className='stack-card-3'>
                        <h5>Rewards Start</h5>
                        <div>
                            <span>After 100 days of stacking</span>
                        </div>
                        <button className='mobile-button'><img src={wallet} alt="" />Connect</button>
                    </div>
                </div>
                <div className='stack-card01 right-card'>
                    <div>
                        <h1>POD-2</h1>
                    </div>
                    <img src={golden} alt='' />
                </div>
            </div>
            <div className='stack-card'>
                <div className='stack-card01'>
                    <div>
                        <h1>POD-3</h1>
                    </div>
                    <img src={golden} alt='' />
                </div>
                <div className='stack-card02'>
                    <div>
                        <div className='stack-card-details'>
                            <p>Apr</p>
                            <p>30%</p>
                        </div>
                        <div className='stack-card-details'>
                            <p>Locking Period</p>
                            <p>360 Days</p>
                        </div>
                        <div className='stack-card-details'>
                            <input
                                type='text'
                                value={inputValues[2]}
                                onChange={handleInputChange(2)}
                                placeholder='>= 1000'
                                style={inlinecss}
                            />
                        </div>
                        <div className='stack-card-details'>
                        {
                                !address ? <button className="d-hero-g-btn" onClick={open}>{"Connect Wallet"}</button> :
                            <button onClick={handleStack(2)} disabled={isButtonDisabled(2)} title={isButtonDisabled(2) && "Invalid input"}>
                                {allowance >= parseFloat(inputValues[2]) ? 'Stake' : 'Approve'}
                            </button>
}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="730" height="12" viewBox="0 0 830 12" fill="none">
                        <path d="M0.226497 6L6 11.77356L11.7735 6L6 0.226497L0.226497 6ZM829.773 6L824 0.226497L818.227 6L824 11.7735L829.773 6ZM6 7H824V5H6V7Z" fill="#757575" fillOpacity="0.5" />
                    </svg>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '100%' }}></div>
                    </div>
                    <div className='stack-card-3'>
                        <h5>Reward Start</h5>
                        <div>
                            <span>After 100 days of stacking</span>
                        </div>
                        <button className='mobile-button'><img src={wallet} alt="" />Connect</button>
                    </div>
                </div>
            </div>
            <LoadingModal isLoading={isLoading} msg={"please wait till the transaction completes"} />

        </div>
    );
}

export default Stacking;
