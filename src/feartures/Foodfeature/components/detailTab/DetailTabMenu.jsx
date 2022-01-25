import React from "react";
import PropTypes from "prop-types";
import "./DetailTabMenu.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
DetailTabMenu.propTypes = {};

function DetailTabMenu(props) {
    const math = useRouteMatch();
    const menuData = [
        {
            name: "DESCRIPTION",
            path: "",
            key : 4
        },
        {
            name: "COMMENT",
            path: "/comment",
            key : 5
        },
    ];
    const location = useLocation();
    const activeIndex = location.pathname.split("/").length;
    return (
        <div>
            <div className="detail__tabs container">
                {menuData.map((data, index) => (
                    <div key={index} className={`detail__tab ${activeIndex === data.key ?'active' : ''}`}>
                        <Link to={`${math.url}${data.path}`}>
                            <Button>{data.name}</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailTabMenu;
