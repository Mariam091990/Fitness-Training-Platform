import React from 'react';
import { IFitLog } from "../../../type";
import Image from "next/image";
import PlanButton from "../../../../src/components/buttons/PlanButton";
import SaveButton from "../../../../src/components/buttons/SaveButton";
import HomeButton from '@/src/components/buttons/HomeButton';

interface IBookDetailsProps {
    params: Promise<{ id: string }>;
}


const FitLogDetails = async () => {

    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;

};
const page = async ({ params }: IBookDetailsProps) => {
    const { id } = await params;
    //    the rule of dynamic routes in next.js is that it takes props as params
    //   
    //    params always returns a promise
    //    so we need to await*** it
    // params carray everything in the form of string** so we need to convert it to number**************

    // console.log("id: ", id);

    const logs = await FitLogDetails();
    // console.log("logs: ", logs);

    const log = logs.find((log: IFitLog) => log.id === Number(id));
    // console.log("log: ", log);

    if (!log) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0d0f13] text-white">
                <h1 className="text-2xl font-bold">Workout not found</h1>
            </div>
        );
    }

    return (
        <div>
            <main className="min-h-screen bg-[#0d0f13] px-4 py-10 text-white md:px-8 lg:px-14">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* ================= IMAGE ================= */}
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={log.image}
                            alt={log.name}
                            width={700}
                            height={700}
                            priority
                            className="h-auto w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="flex flex-col">

                        {/* Title */}
                        <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                            {log.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                            {log.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {log.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= INFORMATION BOX ================= */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#151820]">

                            {/* Equipment */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Equipment
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Difficulty
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Sets
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Reps
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Duration
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Calories
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between px-4 py-4">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                                    Rating
                                </span>

                                <span className="text-sm text-gray-200">
                                    {log.rating}
                                </span>
                            </div>

                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-6">

                            <h2 className="text-sm font-bold uppercase tracking-wide">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-3">
                                {log.instructions.map((instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-6 text-gray-400"
                                    >
                                        <span className="text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>

                        </div>

                        {/* ================= BUTTONS ================= */}
                        <div className="mt-7 flex flex-wrap gap-3">


                            <PlanButton log={log} />
                            <SaveButton log={log} />
                            <HomeButton/>



                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default page;