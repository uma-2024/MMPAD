import React, { useState , useEffect} from 'react';

import tecketbg from '/ticketbg.png'
import jackpottecketbg from '/jackpot_ball_banner.png'

import tecketbgmob from '/tecketbg-mob.png'
import starImage from '/starticket.png'
import kingImage from '/kingbatch.png'
import { useAccount } from 'wagmi';
import { UnWinn , currentDraw , claimUpdate , getNextDrawDetails} from '../../function';
import { userlotteries , Winner , Lotteries } from '../../function';

// const winnersData = [
  
//     {
//         _id: "6594f8009e52f0591161a3ce",
//         walletAddress: "0x5F7e71386A28153915443968138f633034DFDF32",
//         ticketNumber: "2, 12, 2, 12, 12",
//         JackpotNumber: "9",
//         claim: false,
//         __v: 0,
//         matchCount: 5,
//         winningNumber: "2, 12, 2, 12, 12, 4",
//         winningPrize: "350"
//     },
  
// ];

const itemsPerPage = 5;

const LotteryResults = () => {
    const { address, isConnected } = useAccount();
    const [currentPage, setCurrentPage] = useState(1);
    const [winnersData , setWinnersData] = useState([]);
    const [winnersCount , setWinnersCount] = useState([]);
    const [winners , setWinners] = useState([]);
    const [lottery , setLottery] = useState([]);
    const totalPages = Math.ceil(winnersData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedWinners = winnersData.slice(startIndex, startIndex + itemsPerPage);

  // Example callback function to run at noon




  const CurrentDraw = async () => {
    const draw = await currentDraw();
    console.log(draw)
    setWinnersCount(draw.number)
  
  };
  

    const renderNumbers = (ticketNumbers, winningNumbers) => {
        return ticketNumbers.map((number, index) => {
            const isWinningNumber = winningNumbers.includes(number);
            return (
                <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 ${isWinningNumber ? 'bg-white text-black' : 'bg-[#17181a]'}`}
                >
                    {number}
                </div>
            );
        });
    };

    const getdata = async () => {
        const response = await userlotteries(address);
        const winnersCount = await Winner();
        const lotteriesCount = await Lotteries();
        setWinners(winnersCount);
        setLottery(lotteriesCount);
        setWinnersData(response.user)
    }

    useEffect(()=>{
        getdata();
        CurrentDraw();
    },[address])

    return (
        <div className="bg-[#1E2024] p-3 md:p-8">

            <div className=' md:block hidden'>
                <div
                    style={{
                        backgroundImage: `url(${tecketbg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', filter: 'sepia(1)'
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-3 justify-between">
                    <div>
                        <div className="text-white text-left text-xl mb-3 mt-2">
                            <span className='text-xs text-left'>Draw time: 1/5/2024, 4:55:00 AM</span>
                            <div
                                style={{
                                    backgroundImage: `url(${jackpottecketbg})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    filter: 'drop-shadow(2px 4px 6px black)'
                                }}
                                className="flex gap-4  ">
                                <div style={{ lineHeight: '10px' }} className='justify-center text-center p-4 md:ml-5'>
                                    <span className='text-xs md:text-sm font-bold'>LUCKY<br />NUMBERS</span>
                                </div>
                                <div style={{ margin: '0 auto' }} className="flex justify-center md:space-x-4 space-x-1 py-5 ">
                                    {winnersCount.map((number) => (
                                        <div key={number} className="bg-white text-black rounded-full text-sm md:text-lg w-4 h-4 md:mt-1 md:w-7 md:h-7 flex items-center justify-center">
                                            {number}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6 md:text-sm text-xs'>
                        <div className='flex gap-1 justify-end md:w-70 p-1'>
                            <img className='w-[6%] ' src={starImage} alt='starTag' />
                            <span className='mt-2'>Total tickets sold:</span>
                            <span className='mt-2'>{lottery.length}</span>
                        </div>
                        <div className='flex gap-1 justify-end md:w-70 p-1'>
                            <img className='w-[6%] ' src={kingImage} alt='starTag' />
                            <span className='mt-2'>Total winning tickets:</span>
                            <span className='mt-2'>{winners.length}</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' md:hidden block'>
                <div
                    style={{
                        backgroundImage: `url(${tecketbgmob})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center', filter: 'sepia(1)'
                    }}
                    className="w-full p-1">
                    <div>
                        <div className="text-white text-left text-xl mb-3 mt-2">
                            <span className='text-xs text-left'>Draw time: 1/5/2024, 4:55:00 AM</span>
                            <div
                                // style={{backgroundImage:`url(${jackpottecketbgmob})`,
                                // backgroundSize: 'contain',
                                // backgroundPosition: 'center',
                                // }}  
                                className="flex gap-4  ">
                                <div style={{ lineHeight: '10px' }} className='justify-center text-center py-6 px-4 md:ml-5'>
                                    <span className='text-xs md:text-sm font-bold'>LUCKY NUMBERS</span>
                                </div>
                                <div style={{ margin: '0 auto' }} className="flex justify-center md:space-x-4 space-x-1 py-5 ">
                                    {winnersCount.map((number) => (
                                        <div key={number} className="bg-white text-black rounded-full text-sm md:text-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                                            {number}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ lineHeight: '0.5rem' }} className='py-6 md:text-sm text-xs '>
                        <div className='flex gap-1 justify-around md:w-70 p-1'>
                            <img className='w-[6%] ' src={starImage} alt='starTag' />
                            <span className='mt-2'>Total tickets sold:</span>
                            <span className='mt-2'>{lottery.length}</span>
                        </div>
                        <div className='flex gap-1 justify-around md:w-70 p-1'>
                            <img className='w-[6%] ' src={kingImage} alt='starTag' />
                            <span className='mt-2'>Total winning tickets:</span>
                            <span className='mt-2'>{winners.length}</span>
                        </div>
                    </div>

                </div>
            </div>



            {/* Winners List */}
            <div className='mt-10'>
                {/* <div>
                    <div className="flex justify-between mb-4 text-xs">
                        <div>Address</div>

                        <div className='flex justify-end gap-[150px]'>
                        <div className={`items-end justify-between mx-1`}>
                            Lottery Numbers
                        </div>

                        <div>Match</div>
                        <div>Price</div>
                        </div>
                    </div>
                </div> */}
                <div className='overflow-auto'>
                  
                    {selectedWinners.map((winner) => {
                        const ticketNumbers = winner.ticketNumber.split(',').map((num) => num.trim());
                        const winningNumbers = winner?.winningNumber ? winner?.winningNumber?.split(',').map((num) => num?.trim()) : "";

                        return (
                            <>
                         {winner.matchCount ? 
                         <>
                           <div key={winner._id} className="flex items-center justify-between mb-4 text-xs md:text-md gap-4">
                                <div>{winner?.walletAddress.substring(0,10)+"..."+winner?.walletAddress.substring(10,20)}</div>
                                <div className="flex ">
                                    {renderNumbers(ticketNumbers, winningNumbers)}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 ${winner.JackpotNumber === winningNumbers[winningNumbers.length - 1] ? 'bg-yellow-500' : 'bg-[#17181a]'}`}>
                                        {winner.JackpotNumber}
                                    </div>
                                </div>
                                <div>{winner.matchCount} Match</div>
                                <div>{`$${winner.winningPrize}`}</div>
                            </div>
                            </>
                         :
                                  <>
                                  <div key={winner._id} className="flex items-center justify-between mb-4 text-xs md:text-md gap-4">
                                       <div>{winner.walletAddress.substring(0,10)+"..."+winner.walletAddress.substring(10,20)}</div>
                                       <div className="flex mr-[20px] ">
                                           {renderNumbers(ticketNumbers, winningNumbers)}
                                           <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 ${winner.JackpotNumber === winningNumbers[winningNumbers.length - 1] ? 'bg-yellow-500' : 'bg-[#17181a]'}`}>
                                               {winner.JackpotNumber}
                                           </div>
                                       </div>
                                       <div></div>
                                       <div>Not Match</div>
                                   </div>
                                   </>
                         }
                         </>
                        );
                    })}
                 
                    
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === pageNumber ? 'bg-[#17181a]' : 'bg-[#1E2024]'}`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default LotteryResults;
