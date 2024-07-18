"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Model from "./Model";

export default function Navbar(props: { account: string }) {
  const router = useRouter();
  const [showDaoModel, setShowDaoModel] = useState<boolean>(false);
  const [showSigninModel, setShowSigninModel] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-pink fixed p-2 m-4 rounded-full top-4 w-11/12">
        <ul className="flex items-center">
          <li className="mx-2" onClick={() => router.back()}>
            <a className="nav-link cursor-pointer">
              <i className="bi bi-arrow-left-circle"></i>
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-link" onClick={() => router.push("/")}>
              首页
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-link" onClick={() => setShowSigninModel(true)}>
              签到登录
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-link" onClick={() => router.push("/property")}>
              我的资产
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-link" onClick={() => setShowDaoModel(true)}>
              社区治理
            </a>
          </li>
          <li className="flex-1"></li>
          {props.account && (
            <li>
              <span className="mx-2">{props.account}</span>
            </li>
          )}
          <li>
            <button className="button" onClick={() => router.push("/exchange")}>
              兑换玫瑰币
            </button>
          </li>
        </ul>
      </nav>
      <Model showModel={showDaoModel} onClose={() => setShowDaoModel(false)}>
        <div className="p-16 text-center">
          <h3>社区治理（DAO）暂未开放</h3>
          <p className="mt-4">敬请期待</p>
        </div>
      </Model>
      <Model
        showModel={showSigninModel}
        onClose={() => setShowSigninModel(false)}
      >
        <div className="p-16 text-center">
          <h3>签到登录</h3>
          <p className="mt-4">敬请期待</p>
        </div>
      </Model>
    </>
  );
}
