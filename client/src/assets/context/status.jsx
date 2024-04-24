import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export function StatusProvider ({children}) {
    const [login, setLogin] = useState(false)
    return (
        <StatusContext.Provider value={{login, setLogin}}>
            {children}
        </StatusContext.Provider>
    )
}

export const useStatus = () => useContext(StatusContext);