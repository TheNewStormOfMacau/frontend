"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ethers } from "ethers";
import { useEffect } from "react";

export default function Exchange() {
  const exchange = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const address = await signer.getAddress();
    console.log("Signer address:", address);

    const balance = await provider.getBalance(address);
    console.log("Balance:", ethers.formatEther(balance));

    const contract = new ethers.Contract("address", "abi", signer);
  };

  useEffect(() => {
    exchange();
  });

  return (
    <main className="text-white min-h-screen bg-city">
      <Navbar account="" />
      <h1 className="text-gradient">兑换玫瑰币 RoseCoin</h1>
      <div className="flex mt-16">
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/rc.png"
            alt="Single RoseCoin"
            width={100}
            height={100}
          ></Image>
          <button className="button mt-4">100 RCs</button>
          <p className="mt-2">0.0001 ETH</p>
        </div>
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/some-rcs.png"
            alt="Some RoseCoins"
            width={200}
            height={200}
          ></Image>
          <button className="button mt-4">500 RCs</button>
          <p className="mt-2">0.0005 ETH</p>
        </div>
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/many-rcs.png"
            alt="Some RoseCoins"
            width={100}
            height={100}
          ></Image>
          <button className="button mt-4">1000 RCs</button>
          <p className="mt-2">0.001 ETH</p>
        </div>
      </div>
    </main>
  );
}
