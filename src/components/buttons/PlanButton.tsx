"use client";
import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";

const PlanButton = ({log}: {log: IFitLog}) => {

    const {plan, setPlan} = useContext(LogsContext);

const handleClickPlan = () => {

setPlan([...plan, log]);
console.log("plan: ", plan);
}

    return (

        <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300" onClick={() => handleClickPlan()}>


            ＋ Add to todays plan



        </button>



    );
};

export default PlanButton;

