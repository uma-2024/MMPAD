import React, { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateLotteryEntry, deleteLotteryEntry  } from '../../lotterySlice';
import { useAccount , useNetwork } from 'wagmi';
const LotteryPicker = (props) => {
  const { address, isConnected } = useAccount();
  const id = props.id + 1
  const dispatch = useDispatch();

  const handleDataUpdate = (data) => {
    dispatch(addOrUpdateLotteryEntry(data));
  };
  


  const [selectedNumbers, setSelectedNumbers] = useState(new Set());
  const [selectedJackpotNumber, setSelectedJackpotNumber] = useState(null);
  const maxNumbers = 5;
  const totalNumbers = 36;
  const totalJackpotNumbers = 12;

  const toggleNumber = (number) => {
    if (selectedNumbers.has(number)) {
      selectedNumbers.delete(number);
    } else {
      if (selectedNumbers.size < maxNumbers) {
        selectedNumbers.add(number);
      }
    }
    setSelectedNumbers(new Set(selectedNumbers));
  };

  const selectJackpotNumber = (number) => {
    setSelectedJackpotNumber(number);
  };

  
  const generateRandomNumbers = () => {
    let availableNumbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);
    let shuffled = availableNumbers.sort(() => 0.5 - Math.random());
    setSelectedNumbers(new Set(shuffled.slice(0, maxNumbers)));

    availableNumbers = Array.from({ length: totalJackpotNumbers }, (_, i) => i + 1);
    shuffled = availableNumbers.sort(() => 0.5 - Math.random());
    setSelectedJackpotNumber(shuffled[0]);
  };
  const resetPicker = () => {
    dispatch(deleteLotteryEntry(id))
    setSelectedNumbers(new Set());
    setSelectedJackpotNumber(new Set());
  }
  const getSelectedNumbersString = () => {
    return Array.from(selectedNumbers).join(',');
  };

  useEffect(()=>{
    let data = {
      id:id,
      wallet_address : address,
      number_of_tickets : getSelectedNumbersString(),
      jackpot_number : selectedJackpotNumber
    }
    if(selectedNumbers.size < maxNumbers  || data.number_of_tickets == "" || data.jackpot_number == null || data.wallet_address == undefined){
      dispatch(deleteLotteryEntry(id))
    }else{
    handleDataUpdate(data)
    }
  },[selectedJackpotNumber , selectedNumbers])

  // useEffect(()=>{    

  //   let data = {
  //     id:id,
  //     wallet_address : "walletAddress",
  //     number_of_tickets : getSelectedNumbersString(),
  //     jackpot_number : selectedJackpotNumber
  //   }
  //   if(selectedJackpotNumber== undefined){
  //     handleDataUpdate(data)
  //   }
  // },[selectedJackpotNumber ])


  // const generateRandomNumbers = () => {
  //   const availableNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
  //   const shuffled = availableNumbers.sort(() => 0.5 - Math.random());
  //   setSelectedNumbers(new Set(shuffled.slice(0, maxNumbers)));
    
  //   // Introduce a 50% chance to not select a jackpot number
  //   if (Math.random() < 0.5) {
  //     setSelectedJackpotNumber(null);
  //   } else {
  //     setSelectedJackpotNumber(shuffled.slice(maxNumbers, maxNumbers + 1)[0]);
  //   }
  // };

  // const generateRandomNumbers = () => {
  //   const availableNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
  //   const shuffled = availableNumbers.sort(() => 0.5 - Math.random());
  //   setSelectedNumbers(new Set(shuffled.slice(0, maxNumbers)));
  //   setSelectedJackpotNumber(shuffled.slice(maxNumbers, maxNumbers + 1)[0]);
  // };

  return (
    <div className="bg-[#131313] p-4 text-white w-full mx-auto mt-5 md:mt-0">
      <div className="flex justify-between mb-4">
        <button onClick={() => resetPicker()} className="bg-[#414141] p-2 rounded hover:bg-[#252525] hover:border-red-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M2 9.46438L1.46967 8.93405L0.93934 9.46438L1.46967 9.99471L2 9.46438ZM9 2.21436H14V0.714355H9V2.21436ZM14 8.71438H2V10.2144H14V8.71438ZM5.46967 4.93405L1.46967 8.93405L2.53033 9.99471L6.53033 5.99471L5.46967 4.93405ZM1.46967 9.99471L5.46967 13.9947L6.53033 12.934L2.53033 8.93405L1.46967 9.99471ZM14 10.2144C16.6233 10.2144 18.75 8.08773 18.75 5.46437H17.25C17.25 7.2593 15.7949 8.71438 14 8.71438V10.2144ZM14 2.21436C15.7949 2.21436 17.25 3.66944 17.25 5.46437H18.75C18.75 2.84101 16.6233 0.714355 14 0.714355V2.21436Z" fill="white"/>
        <path d="M2 9.46438L1.46967 8.93405L0.93934 9.46438L1.46967 9.99471L2 9.46438ZM9 2.21436H14V0.714355H9V2.21436ZM14 8.71438H2V10.2144H14V8.71438ZM5.46967 4.93405L1.46967 8.93405L2.53033 9.99471L6.53033 5.99471L5.46967 4.93405ZM1.46967 9.99471L5.46967 13.9947L6.53033 12.934L2.53033 8.93405L1.46967 9.99471ZM14 10.2144C16.6233 10.2144 18.75 8.08773 18.75 5.46437H17.25C17.25 7.2593 15.7949 8.71438 14 8.71438V10.2144ZM14 2.21436C15.7949 2.21436 17.25 3.66944 17.25 5.46437H18.75C18.75 2.84101 16.6233 0.714355 14 0.714355V2.21436Z" fill="white"/>
        </svg>
        </button>
        <div className='mt-2 text-md'>{selectedNumbers.size}/{maxNumbers}</div>
        <button  onClick={generateRandomNumbers} className="bg-[#FF3232] p-2 rounded hover:border-red-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
        <path d="M16.2141 7.44674L17.6158 6.04498C18.39 5.27081 19.6452 5.27081 20.4194 6.04498C21.1935 6.81916 21.1935 8.07433 20.4194 8.84851L19.0176 10.2503M16.2141 7.44674L7.98023 15.6806C6.93493 16.7259 6.41226 17.2486 6.05637 17.8855C5.70047 18.5224 5.52927 19.2414 5.18687 20.6795L5 21.4644L5.78486 21.2775C7.22295 20.9351 7.94199 20.7639 8.57889 20.408C9.21579 20.0521 9.73844 19.5294 10.7837 18.4841L19.0176 10.2503M16.2141 7.44674L19.0176 10.2503" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 3.71436C0.585786 3.71436 0.25 4.05014 0.25 4.46436C0.25 4.87857 0.585786 5.21436 1 5.21436V3.71436ZM7.71151 4.70153C7.8425 4.30857 7.63013 3.88383 7.23717 3.75284C6.84421 3.62186 6.41947 3.83423 6.28849 4.22718L7.71151 4.70153ZM6.45585 6.09681L7.16736 6.33398L6.45585 6.09681ZM4.5 6.71436C4.08579 6.71436 3.75 7.05014 3.75 7.46436C3.75 7.87857 4.08579 8.21436 4.5 8.21436V6.71436ZM5.86395 7.2756L6.30248 7.88403L5.86395 7.2756ZM4.78849 4.70153C4.91947 5.09448 5.34421 5.30685 5.73717 5.17587C6.13013 5.04488 6.3425 4.62014 6.21151 4.22718L4.78849 4.70153ZM4.95585 2.8319L5.66736 2.59473V2.59473L4.95585 2.8319ZM3 0.714355C2.58579 0.714355 2.25 1.05014 2.25 1.46436C2.25 1.87857 2.58579 2.21436 3 2.21436V0.714355ZM4.36395 1.65311L3.92542 2.26154L3.92542 2.26155L4.36395 1.65311ZM9 3.71436H1V5.21436H9V3.71436ZM6.28849 4.22718L5.74434 5.85964L7.16736 6.33398L7.71151 4.70153L6.28849 4.22718ZM4.55848 6.71436H4.5V8.21436H4.55848V6.71436ZM5.74434 5.85964C5.62887 6.20604 5.56111 6.40573 5.49559 6.54658C5.46603 6.61013 5.44572 6.64154 5.43484 6.65612C5.42981 6.66287 5.42698 6.66574 5.42637 6.66634C5.42588 6.66684 5.4258 6.66689 5.42542 6.66717L6.30248 7.88403C6.57541 7.68731 6.73754 7.43311 6.85562 7.17928C6.96557 6.94293 7.06282 6.6476 7.16736 6.33398L5.74434 5.85964ZM4.55848 8.21436C4.88907 8.21436 5.19999 8.21549 5.45898 8.18592C5.73713 8.15416 6.02955 8.08075 6.30248 7.88403L5.42542 6.66717C5.42503 6.66744 5.42496 6.6675 5.42434 6.66781C5.42357 6.6682 5.41995 6.66997 5.41196 6.67261C5.39469 6.67832 5.35846 6.68765 5.28883 6.6956C5.13449 6.71322 4.92362 6.71436 4.55848 6.71436V8.21436ZM6.21151 4.22718L5.66736 2.59473L4.24434 3.06907L4.78849 4.70153L6.21151 4.22718ZM3.05848 0.714355H3V2.21436H3.05848V0.714355ZM5.66736 2.59473C5.56282 2.28111 5.46557 1.98579 5.35562 1.74944C5.23754 1.4956 5.07541 1.2414 4.80248 1.04468L3.92542 2.26155C3.9258 2.26182 3.92588 2.26187 3.92637 2.26237C3.92698 2.26297 3.92981 2.26585 3.93484 2.27259C3.94572 2.28717 3.96603 2.31859 3.99559 2.38213C4.06111 2.52298 4.12887 2.72267 4.24434 3.06907L5.66736 2.59473ZM3.05848 2.21436C3.42362 2.21436 3.63449 2.21549 3.78883 2.23311C3.85846 2.24106 3.89469 2.25039 3.91196 2.2561C3.91995 2.25874 3.92357 2.26051 3.92434 2.2609C3.92496 2.26121 3.92503 2.26127 3.92542 2.26154L4.80248 1.04468C4.52955 0.847965 4.23713 0.774547 3.95898 0.742791C3.69999 0.713222 3.38907 0.714355 3.05848 0.714355V2.21436ZM10 4.21436C10.1381 4.21436 10.25 4.32628 10.25 4.46436H11.75C11.75 3.49786 10.9665 2.71436 10 2.71436V4.21436ZM10.25 4.46436C10.25 4.60243 10.1381 4.71436 10 4.71436V6.21436C10.9665 6.21436 11.75 5.43085 11.75 4.46436H10.25ZM10 4.71436C9.86193 4.71436 9.75 4.60243 9.75 4.46436H8.25C8.25 5.43085 9.0335 6.21436 10 6.21436V4.71436ZM9.75 4.46436C9.75 4.32628 9.86193 4.21436 10 4.21436V2.71436C9.0335 2.71436 8.25 3.49786 8.25 4.46436H9.75Z" fill="white"/>
        </svg>
        </button>
      </div>

      <div className="grid grid-cols-6 gap-0.5 mb-4">
        {Array.from({ length: 36 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            style={{margin:'0 auto'}}
            className={`h-10 w-10 flex items-center justify-center rounded-full ${selectedNumbers.has(number) ? 'bg-white text-black' : 'bg-[#222]'} hover:bg-[#22222291] hover:border-red-950`}
            onClick={() => toggleNumber(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <div className="text-left mb-4">Choose 1 Jackpot Ball</div>

      <div className="grid grid-cols-6 gap-0.5">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            style={{margin:'0 auto'}}
            className={`h-10 w-10 flex items-center justify-center rounded-full  ${selectedJackpotNumber === number ? 'bg-yellow-600 text-black' : 'bg-[#222]'}  hover:bg-[#22222291] hover:border-red-950`}
            onClick={() => selectJackpotNumber(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LotteryPicker;
