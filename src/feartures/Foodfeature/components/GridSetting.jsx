import React, { useContext, useRef, useEffect } from "react";
import { GridContext } from "../GridContext";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import "./GridSetting.scss";

GridSetting.propTypes = {};

function GridSetting(props) {
    const grid = useContext(GridContext);
    const handleViewClick = (value) => {
        grid.handleGrid(value.num);
        grid.handleStyle(value.style);
    };
    const gridRef = useRef();
    useEffect(() => {
        const gridItem = gridRef.current.querySelectorAll('.grid__list')
        gridItem.forEach((item, index) => {
            item.onclick = () => {
                document.querySelector('.grid__list.active')?.classList.remove('active');
                item.classList.add("active");
            };
        });
    })
    return (
        <div ref={gridRef} className="grid__wrap">
            <div
                className={`grid__list active`}
                onClick={() => handleViewClick({ num: 3, style: "" })}
            >
                <ViewComfyIcon />
            </div>
            <div
                className={`grid__list`}
                onClick={() => handleViewClick({ num: 12, style: "active" })}
            >
                <ViewListIcon />
            </div>
        </div>
    );
}
export default GridSetting;
