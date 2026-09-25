"use client";

import React, {
    createContext,
    useState,
} from "react";

import { IFitLog } from "../type";

interface ILogsContext {
    plan: IFitLog[];
    setPlan: React.Dispatch<React.SetStateAction<IFitLog[]>>;
    saved: IFitLog[];
    setSaved: React.Dispatch<React.SetStateAction<IFitLog[]>>;
}

export const LogsContext = createContext <ILogsContext | undefined> (undefined);

const LogsProvider = ({children}: { children: React.ReactNode;}) => {
    const [plan, setPlan] = useState<IFitLog[]>([]);
    const [saved, setSaved] = useState<IFitLog[]>([]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved,
    };

    return (
        <LogsContext.Provider value={sharedData}>
            {children}
        </LogsContext.Provider>
    );
};

export default LogsProvider;