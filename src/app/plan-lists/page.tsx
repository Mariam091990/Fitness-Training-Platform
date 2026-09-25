"use client";

import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";
import { IFitLog } from "../../type";





const Planlistspage = () => {
    const { plan, saved } = useContext(LogsContext) as { plan: IFitLog[], saved: IFitLog[] };

    console.log("plan: ", plan, "saved: ", saved);

    return (
        <div className="container mx-auto mb-10">

            <div className="mb-10 ml-10">

                <h1 className="text-4xl font-bold text-black">
                    MY PLANS
                </h1>

                <p className="text-sm text-gray-500">
                    Plan your workouts and save them for later
                </p>

                {/* Statistics */}
                <div className="mt-6 grid grid-cols-3 rounded-2xl border border-gray-800 bg-[#151820]">

                    <div className="border-r border-gray-800 p-5">
                        <p className="text-sm text-gray-400">
                            Exercises
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-lime-400">
                            0
                        </h1>
                    </div>

                    <div className="border-r border-gray-800 p-5">
                        <p className="text-sm text-gray-400">
                            Minutes
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-white">
                            0
                        </h1>
                    </div>

                    <div className="p-5">
                        <p className="text-sm text-gray-400">
                            Calories
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-white">
                            0
                        </h1>
                    </div>

                </div>

            </div>

            {/* ======================tab group====================== */}

            <div className="grid grid-cols-2 gap-10">

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box font-bold ml-10  ">
                    <input type="radio"
                        name="my_tabs_1"
                        className="tab"
                        aria-label="Today's plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            plan.length > 0 ? <div className="grid grid-cols-1 gap-10 p-10">
                                {
                                    plan.map((log: IFitLog) => {
                                        return (
                                            <div className="card w-96 bg-base-100 shadow-lg" key={log.id}>
                                                <div className="card-body">
                                                    <h2 className="card-title">{log.name}</h2>
                                                    <p className="card-text">{log.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div> : <div className="text-center">
                                <h1 className="text-sm font-bold text-black">
                                    YOUR PLAN IS EMPTY
                                </h1>
                                <p className="text-sm text-gray-500">
                                    Start by adding your first workout to your plan
                                </p>
                            </div>
                        }
                    </div>

                    <input type="radio"
                        name="my_tabs_1"
                        className="tab"
                        aria-label="Saved plan"
                        defaultChecked />

                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            plan.length > 0 ? <div className="grid grid-cols-1 gap-10 p-10">
                                {saved.map((log: IFitLog) => {
                                    return (
                                        <div className="card w-96 bg-base-100 shadow-lg" key={log.id}>
                                            <div className="card-body">
                                                <h2 className="card-title">{log.name}</h2>
                                                <p className="card-text">{log.description}</p>
                                            </div>
                                        </div>
                                    );
                                })
                                }
                            </div> : <div className="text-center">
                                <h1 className="text-sm font-bold text-black">
                                    YOUR PLAN IS EMPTY
                                </h1>
                                <p className="text-sm text-gray-500">
                                    Start by adding your first workout to your plan
                                </p>
                            </div>
                        }
                    </div>
                </div>

                <div className="dropdown dropdown-bottom ml-10">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-00 rounded-box z-1 w-52 p-2 shadow-sm font-bold text-xs">
                        <li><a>Duration</a></li>
                        <li><a>Calories</a></li>
                        <li><a>Rating</a></li>
                    </ul>
                </div>
            </div>



        </div>
    );

};

export default Planlistspage;