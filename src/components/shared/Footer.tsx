
import Link from "next/link";
import image from "../../../public/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
    return (
        <div>



            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="flex gap-1 items-center">
                        <Image src={image} alt="logo" className="h-7 w-5 rounded-full" />
                      <Link href="/" className="btn btn-ghost text-md text-amber-50">FITLOG</Link>
                    </div>

                </div>

                <div className="navbar-end flex   ">
                    <p className="text-sm font-bold">
                        FITLOG © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Navbar;