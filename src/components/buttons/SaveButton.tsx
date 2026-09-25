"use client";

import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";
import { toast } from "react-toastify";

const SaveButton = ({ log }: { log: IFitLog }) => {

    const logsContext = useContext(LogsContext);

    if (!logsContext) {
        throw new Error("SaveButton must be used within a LogsProvider");
    }

    const { saved, setSaved } = logsContext;


    const handleClickSave = () => {
        setSaved([...saved, log]);
        toast.success("Saved for later");

        // console.log("saved: ", saved);
    }

    return (

        <button className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white" onClick={() => handleClickSave()}>


            ＋ Save for later



        </button>



    );
};

export default SaveButton;