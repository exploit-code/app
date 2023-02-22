import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    let state = {
        value: false,
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}

export default AppWrapper;

export function useAppContext() {
    return useContext(AppContext);
}