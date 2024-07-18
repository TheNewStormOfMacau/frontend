  export const metaMaskInstalled = () => {
    return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
  };

  export const connectWallet = async () => {
    if (metaMaskInstalled()) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return accounts[0];
      } catch (error) {
        console.error("连接钱包时发生错误: ", error);
      }
    } else {
      alert("请先安装 MetaMask 钱包!");
    }
  };