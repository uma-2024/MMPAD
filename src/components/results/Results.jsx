import React, { useState } from 'react';
import LotteryResults from '../lotteryResults/LotteryResults';
const Results = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <LotteryResults />
    </>
  );
};

export default Results;
