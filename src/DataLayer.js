import React , {
    createContext,
    useContext,
    useReducer
} from "react";


export const DataLayerContext = createContext();

export const DataLayer = ( {initialState, reducer, children }) => (   //in index.js the children is the App component.
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);


