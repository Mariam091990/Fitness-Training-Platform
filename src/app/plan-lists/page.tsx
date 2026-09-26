"use client";

import { useContext, useState } from "react";
import { LogsContext } from "../../context/LogsContext";
import { IFitLog } from "../../type";
import Link from "next/link";

const Planlistspage = () => {
    const { plan, saved, setPlan, setSaved } = useContext(LogsContext) as {
        plan: IFitLog[];
        saved: IFitLog[];
        setPlan: React.Dispatch<React.SetStateAction<IFitLog[]>>;
        setSaved: React.Dispatch<React.SetStateAction<IFitLog[]>>;
    };

    const [activeTab, setActiveTab]
        = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] =
        useState<"duration" | "calories" | "rating">();

    // console.log("plan:", plan);
    // console.log("saved:", saved);

    // ================= SORT =================

    const currentLogs =
        activeTab === "plan" ? [...plan] : [...saved];

    const sortedLogs = currentLogs.sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    // ================= STATISTICS =================

    const totalExercises = plan.length;

    const totalMinutes = plan.reduce(
        (total, log) => total + log.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, log) => total + log.caloriesBurned,
        0
    );

    const savetotalExercises = saved.length;

    const savetotalMinutes = saved.reduce(
        (total, log) => total + log.duration,
        0
    );

    const savetotalCalories = saved.reduce(
        (total, log) => total + log.caloriesBurned,
        0
    );

    const handleDelete = (id: number) => {
        if (activeTab === "plan") {
            const restOfthePlan = plan.filter((log) => log.id !== id)
            setPlan(restOfthePlan);
        } else {
            const restOfthesSaved = saved.filter((log) => log.id !== id)
            setSaved(restOfthesSaved);
        }
    };
    return (
        <div className="container mx-auto mb-10 px-4">

            {/* ================= HEADER ================= */}

            <div className="mb-10">

                <h1 className="text-4xl font-bold text-black">
                    MY PLANS
                </h1>

                <p className="text-sm text-gray-500">
                    Plan your workouts and save them for later
                </p>

                {/* ================= STATISTICS ================= */}

                <div className="mt-6 grid grid-cols-1 rounded-2xl border border-gray-800 bg-[#151820] sm:grid-cols-3">

                    {/* Exercises */}
                    <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
                        <p className="text-sm text-gray-400">
                            Exercises
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-lime-400">
                            {activeTab === "plan" ? totalExercises : savetotalExercises}
                        </h1>
                    </div>

                    {/* Minutes */}
                    <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
                        <p className="text-sm text-gray-400">
                            Minutes
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-white">
                            {activeTab === "plan" ? totalMinutes : savetotalMinutes}
                        </h1>
                    </div>

                    {/* Calories */}
                    <div className="p-5">
                        <p className="text-sm text-gray-400">
                            Calories
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-white">
                            {activeTab === "plan" ? totalCalories : savetotalCalories}
                        </h1>
                    </div>

                </div>
            </div>


            {/* ================= TOOLBAR ================= */}

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* ================= TABS ================= */}

                <div className="flex w-fit rounded-xl border border-gray-200 bg-gray-100 p-1">

                    <button
                        onClick={() => setActiveTab("plan")}

                        className={`rounded-lg px-5 py-2 text-sm font-bold transition ${activeTab === "plan"
                            ? "bg-white text-black shadow"
                            : "text-gray-500 hover:text-black"
                            }`}>

                        Todays plan ({plan.length})
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-5 py-2 text-sm font-bold transition ${activeTab === "saved"
                            ? "bg-white text-black shadow"
                            : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Saved plan ({saved.length})
                    </button>

                </div>





                {/* ================= SORT ================= */}

                <div className="dropdown dropdown-end relative">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn"
                    >
                        Sort by ↓
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-50 mt-2 w-44 rounded-box border border-gray-200 bg-white p-2 shadow-xl"
                    >

                        <li>
                            <button
                                onClick={() => setSortBy("duration")}
                            >
                                Duration
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => setSortBy("calories")}
                            >
                                Calories
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => setSortBy("rating")}
                            >
                                Rating
                            </button>
                        </li>

                    </ul>

                </div>

            </div>


            {/* ================= CONTENT ================= */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5">

                {sortedLogs.length > 0 ? (

                    <div className="space-y-4">

                        {sortedLogs.map((log) => (

                            <div
                                key={log.id}
                                className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                            >

                                {/* Workout information */}

                                <div>

                                    <h2 className="text-lg font-bold text-black">
                                        {log.name}
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {log.equipment}
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-500">

                                        <span>
                                            ◷ {log.duration} min
                                        </span>

                                        <span>
                                            🔥 {log.caloriesBurned} kcal
                                        </span>

                                        <span>
                                            ☆ {log.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* View Details */}

                                <div className="flex gap-2">
                                    <button className="btn btn-sm w-fit">
                                        <Link href={`FitLogsDetails/${log.id}`}  >
                                            View Details
                                        </Link> </button>
                                    <button onClick={() => handleDelete(log.id)} className="btn btn-sm w-fit">Delete</button>
                                </div>
                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="py-16 text-center">

                        <h1 className="text-lg font-bold text-black">
                            {activeTab === "plan"
                                ? "YOUR PLAN IS EMPTY"
                                : "YOUR SAVED PLAN IS EMPTY"}
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            {activeTab === "plan"
                                ? "Start by adding your first workout to your plan"
                                : "Start saving workouts for later"}
                        </p>

                    </div>

                )

                }

            </div>

        </div>
    );
};

export default Planlistspage;