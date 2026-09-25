
import image from "../../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>



            <div className="navbar bg-base-100 shadow-sm mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="font-bold"><a>Workouts</a></li>

                            <li className="font-bold"><a>My Plans</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src={image} alt="logo" className="h-7 w-5 rounded-full" />

                    </div>
                    <Link href="/" className="btn btn-ghost text-md">FITLOG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold">
                            <Link href="/plan-lists" className="font-bold">Workouts</Link>
                        </li>

                        <li className="font-bold">
                            <Link href="/plan-lists" className="font-bold">My Plans</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2  ">
                    <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold">
                            plan
                        </h1>
                        <button className="btn btn-circle">

                        </button></div>
                    <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold">
                            saved
                        </h1>
                        <button className="btn btn-circle">

                        </button></div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;