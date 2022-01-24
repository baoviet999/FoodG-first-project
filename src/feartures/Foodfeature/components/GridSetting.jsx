import React, { useContext } from 'react';
import { GridContext } from '../GridContext';
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import './GridSetting.scss'

GridSetting.propTypes = {
    
};

function GridSetting(props) {
    const grid = useContext(GridContext);
    const handleViewClick = (value) => {
        grid.handleGrid(value.num)
        grid.handleStyle(value.style);
    } 
    return (
        <div className="grid__wrap">
            <div className="grid__list" onClick={() => handleViewClick({ num: 12, style: "active" })}>
                <ViewListIcon />
            </div>
            <div className="grid__list" onClick={() => handleViewClick({ num: 3, style: "" })}>
                <ViewComfyIcon />
            </div>
        </div>
    );
}

export default GridSetting;