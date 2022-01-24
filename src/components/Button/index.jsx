import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Paper } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/styles";
ButtonToTop.propTypes = {};
const useStyles = makeStyles({
    root: {
        transform: "rotate(90deg)",
        position: "fixed",
        right: "40px",
        bottom: "40px",
        zIndex: "1001",
        opacity: "1",
        transition: "all 0.3s ease"
    },
    scrollbtn: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#fff",
        boxShadow: "0 2.5px 10px rgb(0 0 0 / 10%);",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "#ff514e",
            '& > svg': {
                fill : '#fff'
            }
        },
    },
    arrow: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: " translate(-30%,-50%)",
        fill: "#ff514e",
    },
});
function ButtonToTop(props) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const shrink = () => {
            if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", shrink);
        return () => {
            window.removeEventListener("scroll", shrink);
        };
    }, []);

    const classes = useStyles();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        console.log('first');
    }
    return (
        <>
            {scroll && (
                <div className={classes.root} onClick={handleScrollToTop} >
                    <div className={classes.scrollbtn}>
                            <ArrowBackIosIcon className={classes.arrow} fontSize="medium" color="secondary" />
                    </div>
                </div>
            )}
        </>
    );
}

export default ButtonToTop;
