
import axios from "axios";
const apiUrl = 'http://localhost:8080'

export const getNextDrawDetails = () => {
    const now = new Date();
    let nextDraw = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 0);

    // If it's past 12:55 PM, set the next draw to the next day
    if (now > nextDraw) {
        nextDraw.setDate(nextDraw.getDate() + 1 );
    }

    const timeUntilNextDraw = nextDraw - now; // difference in milliseconds

    let seconds = Math.floor(timeUntilNextDraw / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return {
        nextDrawTime: nextDraw.toLocaleString(),
        nextDrawCountdown: `${days}d:${hours}h:${minutes}m:${seconds}s`
    };
};


// export const scheduleAtNoon = (callback) => {
//     const now = new Date();
//     const noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
    
//     if (now >= noon) { // If it's already past noon, schedule for the next day.
//       noon.setDate(noon.getDate() + 1);
//     }
  
//     const msUntilNoon = noon - now;
  
//     setTimeout(callback, msUntilNoon);
// };

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////


export const placeBet = async (lotteries) => {
const transformedData = lotteries.map((item) => ({
  walletAddress: item.wallet_address,
  ticketNumber: item.number_of_tickets.toString(),
  JackpotNumber: item.jackpot_number.toString()
}));


try {
  const response = await axios.post(`${apiUrl}/api/buylottery`, transformedData);
  if (response.data.success) {
    console.log('Users added successfully');
  } else {
    console.error('Failed to add users:', response.data.message);
  }
} catch (error) {
  console.error('Error adding users:', error.message);
}
}

export const userlotteries = async (walletAddress) => {
  try {
    const response = await axios.get(`${apiUrl}/api/getuserlotteries?walletAddress=${walletAddress}`);
    if (response.data.success) {
      return response.data;
    } else {
      console.error('Failed to add users:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding users:', error.message);
  }
  }

  export const jackpotWinner = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/getJackpotWinner`);
      if (response.data) {
        return response.data;
      } else {
        console.error('Failed to add users:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding users:', error.message);
    }
    }

    export const Lotteries = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getlotteries`);
        if (response.data) {
          return response.data;
        } else {
          console.error('Failed to add users:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding users:', error.message);
      }
    }

    export const Winner = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/winner`);
        if (response.data) {
          return response.data;
        } else {
          console.error('Failed to add users:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding users:', error.message);
      }
    }

    export const UnWinn = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/lotteries`);
        if (response.data) {
          return response.data;
        } else {
          console.error('Failed to add users:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding users:', error.message);
      }
    }

    export const currentDraw = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/lastLotteryEntry`);
        if (response.data) {
          return response.data;
        } else {
          console.error('Failed to add users:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding users:', error.message);
      }
    }



    export const claimUpdate = async (updatedData) => {
      
      try {
        const response = await axios.put(`${apiUrl}/api/claimlottery`, updatedData);
        if (response.data.success) {
          console.log('Users updated successfully');
        } else {
          console.error('Failed to updated users:', response.data.message);
        }
      } catch (error) {
        console.error('Error updating users:', error.message);
      }
      }
      