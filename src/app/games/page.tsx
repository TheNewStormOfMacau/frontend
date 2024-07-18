"use client";

import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState<string>("");
  const [showDaoModel, setShowDaoModel] = useState<boolean>(false);
  const router = useRouter();

  //   const getBalance = async () => {
  //     const ALCHEMY_SEPOLIA_URL = "https://rpc.sepolia.org";
  //     const provider = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);

  //     const privateKey =
  //       "0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b";
  //     const wallet = new ethers.Wallet(privateKey, provider);

  //     const abiWETH = ["function balanceOf(address) public view returns(uint)"];
  //     const contractAddress = "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6";
  //     const contract = new ethers.Contract(contractAddress, abiWETH, wallet);

  //     const address = await wallet.getAddress();
  //     const balance = await contract.balanceOf(address);
  //     console.log(`Balance: ${ethers.formatEther(balance)}\n`);

  //     // const tx = await contract.deposit({ value: ethers.parseEther("0.001") });
  //     // await tx.wait();

  //     const network = await provider.getNetwork();
  //     console.log("Network: ", network.toJSON());
  //   };

  //   useEffect(() => {
  //     getBalance();
  //   });

  return (
    <main>
      <Navbar account={account} />

      <div className="w-10/12 flex flex-col h-fit mt-32">
        <div className="w-full flex">
          <div
            className="card w-[70%] h-40 bg-1 relative"
            onClick={() => router.push("/baige")}
          >
            <h2 className="text-2xl font-bold">进入游戏：白鸽票</h2>
            <i className="bi bi-dice-5 icon absolute right-5 bottom-5 text-8xl -rotate-12"></i>
          </div>
          <div className="card w-[30%] relative">
            <h2 className="text-2xl font-bold">游戏玩法</h2>
            <i className="bi bi-question-diamond icon absolute right-5 bottom-5 text-8xl"></i>
          </div>
        </div>
        <div className="w-full flex">
          <div
            className="card w-[40%] h-40 relative"
            onClick={() => router.push("/draw")}
          >
            <h2 className="text-2xl font-bold">抽取勋章</h2>
            <i className="bi bi-award icon absolute right-5 bottom-5 text-8xl"></i>
          </div>
          <div
            className="card w-[60%] relative"
            onClick={() => router.push("/property")}
          >
            <h2 className="text-2xl font-bold">我的资产</h2>
            <i className="bi bi-bank icon absolute right-5 bottom-5 text-8xl"></i>
          </div>
        </div>
        <div className="w-full flex">
          <div
            className="card w-[50%] h-40 relative"
            onClick={() => setShowDaoModel(true)}
          >
            <h2 className="text-2xl font-bold">社区治理</h2>
            <i className="bi bi-buildings icon absolute right-5 bottom-5 text-8xl"></i>
          </div>
          <div className="card w-[50%] relative">
            <h2 className="text-2xl font-bold">查看代码</h2>
            <i className="bi bi-code-slash icon absolute right-5 bottom-5 text-8xl"></i>
          </div>
        </div>
      </div>
      <Model showModel={showDaoModel} onClose={() => setShowDaoModel(false)}>
        <div className="p-16 text-center">
          <h3>社区治理（DAO）暂未开放</h3>
          <p className="mt-4">敬请期待</p>
        </div>
      </Model>
    </main>
  );
}
