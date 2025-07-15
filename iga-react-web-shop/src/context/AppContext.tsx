// Hooks
import { useContext } from "react";
import { AppContext } from "../hooks/AppProvider";

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used whitin an AlertProvider");
    return context;
}
