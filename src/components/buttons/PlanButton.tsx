"use client";
import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";
import { toast } from "react-toastify";

const PlanButton = ({log}: {log: IFitLog}) => {

    const logsContext = useContext(LogsContext);

    if (!logsContext) {
        throw new Error("PlanButton must be used within a LogsProvider");
    }

    const { plan, setPlan } = logsContext;
// console.log("LogsProvider: ", LogsProvider);

const handleClickPlan = () => {

    setPlan([...plan, log]);
     toast.success("Added to the plan list");
//console.log("button triggered");
}

    return (

        <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
         onClick={() => handleClickPlan()}>


            ＋ Add to todays plan



        </button>



    );
};

export default PlanButton;

