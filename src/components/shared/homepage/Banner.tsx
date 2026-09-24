import Image from 'next/image';

import image from "../../../../public/assets/banner.png";


const Banner = () => {
    return (
        <div className="container mx-auto mb-10">
            <div className="bg-base-500 rounded-2xl shadow-lg">
                <div className=" grid justify-items-center md:grid-cols-2 gap-20  p-10">

                    <div className=" grid grid-rows-4 gap-1">
                        <h1 className="text-sm font-bold">
                            WORKOUT LIBRARY
                        </h1>
                        <p className="text-4xl font-bold">
                            TRAIN WITH INTENT. LOG <br /> EVERY SET.
                        </p>
                        <p className="text-sm">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.
                        </p>
                        <div>

                            <button className=" btn w-[30%] "> Get Started</button>


                        </div>

                    </div>
                    <div>
                        <Image src={image} alt="Workout banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;