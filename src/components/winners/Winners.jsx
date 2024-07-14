import React, { useState , useEffect} from 'react';

import tecketbg from '/ticketbg.png'
import jackpottecketbg from '/jackpot_ball_banner.png'

import tecketbgmob from '/tecketbg-mob.png'
import starImage from '/starticket.png'
import kingImage from '/kingbatch.png'
import { useAccount } from 'wagmi';
import { jackpotWinner } from '../../function';


const itemsPerPage = 5;

const Winners = () => {
    const { address, isConnected } = useAccount();
    const [currentPage, setCurrentPage] = useState(1);
    const [winnersData , setWinnersData] = useState([]);
    const totalPages = Math.ceil(winnersData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedWinners = winnersData.slice(startIndex, startIndex + itemsPerPage);


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
        const response = await jackpotWinner(address);
        setWinnersData(response)
    }

    useEffect(()=>{
        getdata();
    },[address])

    return (
        <div className="bg-[#1E2024] p-3 md:p-8">

            <div className='mt-10'>
                <div className='overflow-auto'>
                  
                    {selectedWinners.map((winner) => {
                        const ticketNumbers = winner.ticketNumber.split(',').map((num) => num.trim());
                        const winningNumbers = winner?.winningNumber ? winner?.winningNumber?.split(',').map((num) => num?.trim()) : "";

                        return (
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

export default Winners;
