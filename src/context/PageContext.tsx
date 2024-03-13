import { FC, ReactNode, createContext, useContext, useState } from "react";

export const PageContext = createContext<any>(0);

interface PageContextProviderProps {
    children: ReactNode;
}

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePageContext must be used within a PageContextProvider");
    }
    return context;
};

export const PageContextProvider: FC<PageContextProviderProps> = ({ children }) => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    return (
        <PageContext.Provider value={{pageNumber, setPageNumber}}>
            {children}
        </PageContext.Provider>
    );
};
