"use client";

import { useContext } from "react";
import { LogsContext } from "../../context/LogsContext";

import { IFitLog } from "../../type";

const SaveButton = ({log}: {log: IFitLog}) => {

    const {saved, setSaved} = useContext(LogsContext);

    const handleClickSave = () => {
        setSaved([...saved, log]);
        console.log("saved: ", saved);
    }

    return (

        <button className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white" onClick={() => handleClickSave()}>


            ＋ Save for later



        </button>



    );
};

export default SaveButton;