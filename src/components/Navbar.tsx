"use client";
import { useRouter } from "next/navigation";

export default function Navbar(props: { account: string }) {
  const router = useRouter();
  return (
    <nav className="bg-pink fixed p-2 m-4 rounded-full top-4 w-11/12">
      <ul className="flex items-center">
        <li className="mx-2" onClick={() => router.back()}>
          <a className="nav-link cursor-pointer">
            <i className="bi bi-arrow-left-circle"></i>
          </a>
        </li>
        <li className="mx-2">
          <a className="nav-link">签到登录</a>
        </li>
        <li className="mx-2">
          <a className="nav-link">社区治理</a>
        </li>
        <li className="mx-2">
          <a className="nav-link">优惠福利</a>
        </li>
        <li className="mx-2">
          <a className="nav-link">联系我们</a>
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
  );
}
