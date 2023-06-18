import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";
import abi from "./simpleAccountFactory.json";

export const makeAccountFactoryContract = () => {
  const contractAddress = "0xdea5dda469e0c8d4193545ca6aaaaed24f1cef3b"; // Account Factory Address I have already deployed
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const providerUrl = process.env.REACT_APP_GOERLI_PROVIDER_URL;

  const hdWalletProvider = new HDWalletProvider({
    privateKeys: [privateKey],
    providerOrUrl: providerUrl,
  });

  const web3 = new Web3(hdWalletProvider);
  console.log(web3);
    const contract = new web3.eth.Contract(abi, contractAddress);
  return {contract};
};
