import { Grid, makeStyles } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import React from "react";
import "./styles.scss";
function Analysis(props) {
    const analysisData = [
        {
            name: "Cups of Coffee",
            total: "350+",
        },
        {
            name: "Orders Everyday",
            total: "2,678+",
        },
        {
            name: "Skilled Professionals",
            total: "60",
        },
        {
            name: "Sandwichs at Hour",
            total: "30",
        },
    ];

    return (
        <div className="analysis">
            <div className="analysis__sandwich">
                <div className="analysis__sandwich-img">
                    <span>SandWich</span>
                    <h1>$45</h1>
                    <div className="analysis__sandwich-play">
                        <PlayArrowRoundedIcon />
                    </div>
                </div>
            </div>
            <div className="analysis__sandwich-total ">
                <Grid container className="analysis__sandwich-total container">
                    {analysisData.map((data) => (
                        <Grid item lg={3} xs={6} sm={3} key={data.name} >
                            <div className="analysis__sandwich-total-item">
                                <h1>{data.total}</h1>
                                <span>{data.name}</span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Analysis;
