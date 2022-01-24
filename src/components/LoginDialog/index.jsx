import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";

LoginDiaLog.propTypes = {};
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function LoginDiaLog({ isLogin, onCancel }) {
    console.log(isLogin);
    const handleCancel = () => {
        if (!onCancel) return;
        onCancel(false)
    }
    return (
        <div>
            <Dialog
                open={isLogin}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"JOIN WITH US 💚"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You're not sign in. Please sign in to use this feature!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Link to="/login">
                        <Button color="primary">Login</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LoginDiaLog;
