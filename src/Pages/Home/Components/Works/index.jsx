//React
import React from "react";
//Material Ui
import { Container, Grid } from "@material-ui/core";
import workInfo from "../../../../utils/workInfo";
//Scss
import "./styles.scss";

function Works(props) {
    return (
        <div className="work container">
            <Container>
                <div className="work__title">Order Now!</div>
                <div className="work__subTitle">How it works</div>
                <Grid container>
                    {workInfo.map(({ img, content, step, arrow }, index) => (
                        <Grid key={index} className="work__container" item xs={12} sm={6} lg={3}>
                            <div className="work__wrap">
                                <div className="work__thumbnail">
                                    <img src={img} alt="" />
                                    <div className="work__step">
                                        <span className="work__step-top">{`0${step}`}</span>
                                        <span className="work__step-bt">STEP</span>
                                    </div>
                                    <div className="work__title-n">
                                        <span>{content}</span>
                                    </div>
                                </div>
                                <div className="work__arrow">
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Works;
