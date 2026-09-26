"use client";

import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";
import { toast } from "react-toastify";

const SaveButton = ({ log }: { log: IFitLog }) => {

    const logsContext = useContext(LogsContext);



    const { saved, setSaved, plan } = logsContext as {
        plan: IFitLog[];
        saved: IFitLog[];
        setSaved: React.Dispatch<React.SetStateAction<IFitLog[]>>;
    };


    const handleClickSave = (log: IFitLog) => {
        const alreadyInSaved = saved.some((item) => item.id === log.id);
        const alreadyInPlan = plan.some((item) => item.id === log.id);

        if (alreadyInSaved ) {
            toast.error("This workout is already in your saved plan");
            return;
        }
        if (alreadyInPlan) {
            toast.error("This workout is already in your plan");
            return;
        }   
        setSaved([...saved, log]);
        toast.success(`${log.name} saved for later`);


    }

    return (

        <button className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
            onClick={() => handleClickSave(log)}>


            ＋ Save for later



        </button>



    );
};

export default SaveButton;