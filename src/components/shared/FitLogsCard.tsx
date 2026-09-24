
import Image from "next/image";
import { IFitLog } from "../../type";


import React from 'react';
import Link from "next/link";

const FitLogsCard = ({ log }: { log: IFitLog }) => {



    return (
        <div className=" w-full min-w-0">

            <div className="w-full overflow-hidden rounded-xl border border-gray-800 bg-[#151515]">

                {/* Workout Image */}
                <Link href={`/FitLogsDetails/${log.id}`}>
                    <Image
                        src={log.image}
                        alt={log.name}
                        width={700}
                        height={700}

                        className="h-41.25 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    /></Link>

                {/* Card Content */}
                <div className="p-4">

                    {/* Muscle Groups */}
                    <div className="mb-3 flex gap-2">
                        {log.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black"
                            >
                                {muscle.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="text-lg font-bold uppercase text-white">
                        {log.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-1 text-sm text-gray-500">
                        {log.equipment}
                    </p>

                    {/* Bottom Information */}
                    <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                        <span>◷ {log.duration} min</span>

                        <span>◉ {log.caloriesBurned} kcal</span>

                        <span>☆ {log.rating}</span>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default FitLogsCard;