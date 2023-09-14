"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Menus} from "@/constant";

const TopBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [top, setTop] = useState("20px");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos -10) {
        setTop("20px");
      } else {
        setTop("-150px");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`sticky_nav px-4 z-20 backdrop-blur-[1px]`}
      style={{ top: `${top}` }}
    >
      <Link href={"/"}>
        <div className="rounded-full p-0.5">
          <Image
            src="/logo-light.svg"
            alt="logo"
            width={100}
            height={50}
            className="h-10 aspect-auto dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt="logo"
            width={100}
            height={50}
            className="h-10 aspect-auto hidden dark:block"
          />
        </div>
      </Link>
      <div className="flex flex-1 justify-end md:justify-center">
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {Menus.map((menu) => {
              const isActive = pathname === menu.path;
              return (
                <li>
                  <Link
                    className={`relative block px-3 py-2 transition ${isActive? 'text-teal-500':''}  hover:text-teal-500 dark:hover:text-teal-400`}
                    href={menu.path}
                    key={menu.name}
                  >
                    {menu.name}
                    {isActive ? (
                      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="pointer-events-auto">
        <button
          type="button"
          aria-label="Switch to light theme"
          className="dark:hidden group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setTheme("dark")}
        >
          <svg
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
          >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
            <path
              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
              fill="none"
            ></path>
          </svg>
          
        </button>
        <button
          type="button"
          aria-label="Switch to light theme"
          className="dark:block hidden group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setTheme("light")}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
          >
            <path
              d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
