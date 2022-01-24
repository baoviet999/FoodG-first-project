import { createContext, useState } from "react";

const GridContext = createContext()

function GridProvider(props) {
    const [grid, setGrid] = useState(3);

    const [style , setStyle] = useState('')

    const handleGrid = (value) => {
        setGrid(value)
    }
    const handleStyle = (value) => {
        setStyle(value);
    };
    const value = {
        style,
        grid, 
        handleGrid,
        handleStyle
    }
    return (
        <GridContext.Provider value={value}>
            {props.children}
        </GridContext.Provider>
    );
}
export {GridContext , GridProvider}