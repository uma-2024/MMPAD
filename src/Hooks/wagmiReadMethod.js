import { useContractRead } from "wagmi";
import { useState } from "react";
import BigNumber from "bignumber.js";

const useWagmiReadMethod = (abi, contractAddress, functionName, params) => {
  const [data, setData] = useState(null);
  const [wholeData, setWholeData] = useState(null);

  const { refetch: refetchMethod } = useContractRead({
    abi: abi,
    address: contractAddress,
    functionName: functionName,
    args: params,
  });

  const method = async () => {
    try {
      const result = await refetchMethod();
      if (result) {
        const value = new BigNumber(result?.data);
        const dividedValue = value.dividedBy(new BigNumber(10).pow(18));
        setData( dividedValue?.c[0]);
        setWholeData(result);
        return  dividedValue?.c[0];
      }
    } catch (error) {
      console.error(`Error in ${functionName}`, error);
    }
  };

  return { method, data, wholeData };
};

export default useWagmiReadMethod;
