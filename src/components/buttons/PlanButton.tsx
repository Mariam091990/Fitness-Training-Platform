"use client";
import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";
import { toast } from "react-toastify";

const PlanButton = ({ log }: { log: IFitLog }) => {

    const logsContext = useContext(LogsContext);



    const { plan, setPlan, saved } = logsContext as {
        saved: IFitLog[];
        plan: IFitLog[];
        setPlan: React.Dispatch<React.SetStateAction<IFitLog[]>>;
    };
    // console.log("LogsProvider: ", LogsProvider);

    const handleClickPlan = (log: IFitLog) => {

        const alreadyInPlan = plan.some((item) => item.id === log.id);
        const alreadyInSaved = saved.some((item) => item.id === log.id);    

        if (alreadyInPlan) {
            toast.error("This workout is already in your plan");
            return;
        }
        if (alreadyInSaved) {
            toast.error("This workout is already in your saved plan");
            return;
        } 
        
        const allLogs = [...plan, log]
        setPlan(allLogs);

        toast.success(`${log.name} added to the plan list`);

    }

    return (

        <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            onClick={() => handleClickPlan(log)}>


            ＋ Add to todays plan



        </button>



    );
};

export default PlanButton;

