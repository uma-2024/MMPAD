import React, { useState } from 'react';
import bcsmall from '/bc-small.svg'
import { useSelector } from 'react-redux';
import LotteryPicker from '../lotteryPicker/LotteryPicker';
import { useDispatch } from 'react-redux';
import { useAccount , useNetwork } from 'wagmi';
import { deleteLotteryEntry } from '../../lotterySlice';
import { placeBet } from '../../function';
const Lottery = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const lotteryData = useSelector(state => state.lottery.data);
  const [value, setValue] = useState(1);
  let blanckSlip = {
    tickets:0,
    bets:0
  }
  const [betslip, setBetSlip] = useState(blanckSlip);
  const dispatch = useDispatch();

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value > 0 ? value - 1 : 0);
  const setPresetValue = (preset) => setValue(preset);

  const handleGetData = () => {
    let slipdata = {
      tickets:value,
      bets:lotteryData.length
    }
    setBetSlip(slipdata);
  };
  const handleDelete = () => {
    dispatch(deleteLotteryEntry(value))
    setValue(value > 0 ? value - 1 : 0)
  }

  return (
    <>
      <div className="md:flex gap-3">
        <div className='md:w-[70%] bg-[#1E2024]  text-[10px] md:text-[13px] py-4 px-3'>
          <div className='flex justify-between text-sm'>
            <span className='text-[#98A7B5]'>Numbers of Ticket</span>
            <span>{value} Ticket = <span className='sonictext'>$ {(0.1 * value).toFixed(1)}</span></span>
          </div>
          <>
            <div className="flex items-center justify-between bg-[#2D3035] rounded-md p-1 space-x-2 mt-2">
              {value == 1 ?
                <button
                  className="bg-[#1C1E22] text-white px-3 py-1 rounded hover:bg-[#1C1E22]  hover:border-red-800 focus:outline-none "
                >
                  -
                </button>
                :
                <button
                  className="bg-[#1C1E22] text-white px-3 py-1 rounded hover:bg-[#1C1E22]  hover:border-red-800 focus:outline-none "
                  onClick={handleDelete}
                >
                  -
                </button>
              }
              <span className="text-white w-60">{value}</span>
              <button
                className="bg-[#1C1E22] text-white px-3 py-1 rounded hover:bg-[#1C1E22]  hover:border-red-800 focus:outline-none"
                onClick={increment}
              >
                +
              </button>
              <div className='flex overflow-auto md:overflow-visible' >
                {[20, 50, 100].map((preset) => (
                  <button
                    key={preset}
                    className="bg-[#1C1E22] text-white hover:border-red-800 px-12 py-2 mx-1 rounded hover:bg-[#1C1E22] focus:outline-none"
                    onClick={() => setPresetValue(preset)}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </>
          {/* <div className='flex justify-between text-sm mt-8'>
            <span className='text-[#98A7B5]'>Completed 0 / 5 Ticket(s)</span>
            <span className='text-[#98A7B5]'>Clear All</span>
          </div> */}
<>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-5">
          {Array.from({ length: value }, (_, index) => (
            <LotteryPicker id={index} />
          ))}
          </div>
</>


        </div>

        <div className='md:w-[30%] mt-5 md:mt-0'>
          <div className='text-left px-6 py-5  bg-[#1E2024] '>
            <span className='font-bold'>Mango Lottery Jackpot</span>
            <div className='flex justify-between text-sm mt-4'>
              <span className='text-[#98A7B5]'>{value} Tickets</span>
              <span className='text-white'>$ 0.1 x {value}</span>
            </div>
            <div className='flex justify-between text-sm mt-4'>
              <span className='text-[#98A7B5]'>Total Bet Amount</span>
              <span className='text-white'>$ {(0.1 * value).toFixed(1)}</span>
            </div>
            {isConnected ? 
            <div onClick={ handleGetData } className='cursor-pointer sonicbutton text-center py-2 mt-4'>
              <a className=" cursor-pointer text-white   hover:text-white ">Add Bet</a>
            </div>
            : 
            <div className='sonicbuttondisable text-center py-2 mt-4'>
              <a className=" cursor-pointer text-white   hover:text-white ">Add Bet</a>
            </div>
            }
          </div>
          <div className='sonicbutton mt-5 py-2'>
             
          <div className='flex justify-between text-white p-2'>
              <div className='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.00007 0.214355C0.585855 0.214355 0.250069 0.550142 0.250069 0.964355V7.71436H1.47317C2.43967 7.71436 3.22317 8.49786 3.22317 9.46436C3.22317 10.4309 2.43967 11.2144 1.47317 11.2144H0.250069V17.9644C0.250069 18.3786 0.585855 18.7144 1.00007 18.7144H20.9992C21.4134 18.7144 21.7492 18.3786 21.7492 17.9645L21.7502 11.2144H20.5256C19.5591 11.2144 18.7756 10.4309 18.7756 9.46436C18.7756 8.49786 19.5591 7.71436 20.5256 7.71436H21.7502L21.7492 0.964252C21.7492 0.550079 21.4134 0.214355 20.9992 0.214355H1.00007ZM8.91385 12.9645L14.5003 7.37857L13.0861 5.96436L7.49964 11.5503L8.91385 12.9645ZM9.51136 5.96436H7.50013V7.96436H9.51136V5.96436ZM14.5001 10.9644H12.4889V12.9644H14.5001V10.9644Z" fill="white"/>
          </svg>
              <span className='font-extrabold '>Bet Slip</span>
              </div>
              <span className='text-black bg-white px-2 rounded-xl'>{betslip.bets}</span>
            </div>
          </div>
          <div className='text-left px-6 py-5 bg-[#1E2024] '>
          <div className='flex justify-between text-sm mt-4'>
              <span className='text-white font-extrabold'>Play With</span>

            </div>  
            <div className='flex justify-between text-sm mt-4 sonicborder px-4 py-2'>
              <div className='text-white gap-2 flex'>
              <img  className='w-[20%] md:w-[30%] shadow-xl' src={bcsmall} alt='banner' />
              <span className=' mt-1 md:mt-3'>ML</span>
              </div>
              <span className='text-white mt-1 md:mt-3'>USD {(0.1 * betslip.bets).toFixed(1)}</span>
            </div>
            <div className='flex justify-between text-sm mt-4'>
              <span className='text-[#98A7B5]'>Total Number Of Tickets</span>
              <span className='text-white'>{betslip.tickets}</span>
            </div>
            <div className='flex justify-between text-sm mt-4'>
              <span className='text-[#98A7B5]'>Total Number Of Bets</span>
              <span className='text-white'>{betslip.bets}</span>
            </div>
            {isConnected ? 
            <div onClick={()=>placeBet(lotteryData)} className='sonicbutton text-center py-2 mt-4'>
              <a  className="cursor-pointer text-white hover:text-white">Place Bet</a>
            </div>
            : 
            <div className='sonicbuttondisable text-center py-2 mt-4'>
            <a className="text-white hover:text-white">Place Bet</a>
            </div>
            }
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Lottery;
