"use client";
import { Menus } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BottomBar = () => {
  const weird = ['translate-x-0','translate-x-16','translate-x-32']
  const [active, setActive] = useState(0);

  return (
    <header className={`static_nav bottom-0 justify-center z-50`}>
      <div className="max-h-[4.4rem] px-6 rounded-t-2xl text-sm font-medium shadow-lg ring-dark-b1 ring-1  backdrop-blur bg-dark-bg5 box-content">
        <ul className="flex relative">
          <span
            className={`bg-dark-1 duration-500 ${Menus[active].dis} translate-x-16 border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span
              className="w-2.5 h-2.5 #18181b absolute top-4 -left-[13.8px] 
          rounded-tr-[7px] shadow-myShadow1"
            ></span>
            <span
              className="w-2.5 h-2.5 #18181b absolute top-4 -right-[13.8px] 
          rounded-tl-[7px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <Link
                href={menu.path}
                className="flex flex-col text-center pt-6 hover:text-dark-1 text-dark-2"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 z-10 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  <Image
                    src={menu.icon}
                    alt="icon"
                    width={36}
                    height={36}
                    className="m-auto"
                  />
                </span>
                <span
                  className={`link-nav ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default BottomBar;
