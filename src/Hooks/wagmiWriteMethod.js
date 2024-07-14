import { useContractWrite } from "wagmi";
import { useState } from "react";

const useWagmiWriteMethod = (abi, contractAddress, funnctionName) => {
  const [hash, setHash] = useState(null);

  const { writeAsync: refetchMethod } = useContractWrite({});

  const method = async (params) => {
    console.log(params);
    try {
      const result = await refetchMethod({
        abi: abi,
        address: contractAddress,
        functionName: funnctionName,
        args: params,
      });
      if (result) {
        setHash(result?.hash);
        return result?.hash;
      }
    } catch (error) {
      console.error(`Error in ${funnctionName}`, error);
    }
  };

  return { method, hash };
};

export default useWagmiWriteMethod;
