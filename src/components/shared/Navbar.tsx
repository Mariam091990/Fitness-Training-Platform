"use client";

import image from "../../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavSavedButton from "../buttons/NavSavedButton";
import NavPlanButton from "../buttons/NavPlanButton";

const Navbar = () => {
    const pathname = usePathname();

    

    return (
        <div>
            <div className="navbar mb-10 bg-gray-800 shadow-sm">

                {/* Left side */}
                <div className="navbar-start">

                    {/* Mobile dropdown */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li className="font-bold text-amber-50">
                                <Link
                                    href="/save-list"
                                    className={`font-bold ${pathname === "/save-list" ? "bg-lime-400 text-black" : ""
                                        }`}
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li className="font-bold text-amber-50">
                                <Link
                                    href="/plan-lists"
                                    className={`font-bold ${pathname === "/plan-lists" ? "bg-lime-400 text-black" : ""
                                        }`}
                                >
                                    My Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-1">
                        <Image
                            src={image}
                            alt="logo"
                            className="h-7 w-5 rounded-full"
                        />
                    </div>

                    <Link
                        href="/"
                        className="btn btn-ghost text-md ml-1 text-amber-50"
                    >
                        FITLOG
                    </Link>
                </div>

                {/* Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* Workouts */}
                        <li className="font-bold">
                            <Link
                                href="/save-list"
                                className={`font-bold text-amber-50 ${pathname === "/save-list"
                                        ? "bg-lime-400 text-black"
                                        : ""
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        {/* My Plans */}
                        <li className="font-bold">
                            <Link
                                href="/plan-lists"
                                className={`font-bold text-amber-50 ${pathname === "/plan-lists"
                                        ? "bg-lime-400 text-black"
                                        : ""
                                    }`}
                            >
                                My Plans
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Right side counters */}
                <div className="navbar-end flex gap-2">

                    {/* Plan */}
                    <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold text-amber-50">
                            plan
                        </h1>

                        <button
                            className={`btn btn-circle ${pathname === "/plan-lists"
                                    ? "bg-lime-400"
                                    : ""
                                }`}
                        >
                            <NavPlanButton />
                        </button>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold text-amber-50">
                            saved
                        </h1>

                        <button
                            className={`btn btn-circle ${pathname === "/save-list"
                                    ? "bg-lime-400"
                                    : ""
                                }`}
                        >
                            <NavSavedButton />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;