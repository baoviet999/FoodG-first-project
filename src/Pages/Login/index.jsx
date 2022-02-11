import { Button, Container, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import { signInWithPopup } from "firebase/auth";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginThumb from "../../assets/svg/Login/thumb.svg";
import { facebookProvider, googleProvider } from "../../config/authMethod";
import authentication from "../../config/firebase-config";
import LoginForm from "./components/LoginForm";
import "./styles.scss";
import { login } from "./userSlice";

Login.propTypes = {};

function Login(props) {
    const { enqueueSnackbar } = useSnackbar();
    const handleClick = () => {
        enqueueSnackbar("  This feature is current close! please try to login with facebook or google", {
            variant: "success",
            autoHideDuration: 3000,
        });
    };
    const history = useHistory();
    const handleClickClose = () => {
        history.push("/");
    };
    const dispatch = useDispatch();
    const handleOnClick = async (provider) => {
        await signInWithPopup(authentication, provider)
            .then((res) => {
                const { user } = res
                const action = login(user)
                dispatch(action)
                history.push("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
        
    };

    return (
        <div className="form-login__wrap">
            <div className="login__form">
                <Container>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={loginThumb} width="100%" alt="" />
                        </Grid>
                        <Grid item xs={6}>
                            <div className="login__container">
                                <h1>JOIN WITH US</h1>
                                <div className="login__register">
                                    Don't have an account?{" "}
                                    <strong onClick={handleClick}>Create an account</strong>
                                </div>
                                <div className="login-form__signin">
                                    <LoginForm />
                                </div>
                                <div className="login-form__spre">
                                    <span className="login-form__spre--text">OR</span>
                                </div>
                                <div className="login-form__with-wrap">
                                    <Button
                                        className="login-form__with-btn login-form__with-fb"
                                        variant="contained"
                                        onClick={() => handleOnClick(facebookProvider)}
                                    >
                                        <FacebookIcon />
                                        <span>Login with Facebook</span>
                                    </Button>
                                    <Button
                                        className="login-form__with-btn login-form__with-fb"
                                        variant="contained"
                                        onClick={() => handleOnClick(googleProvider)}
                                    >
                                        <FacebookIcon />
                                        Login with Google
                                    </Button>
                                </div>
                                <div className="login-form__close" onClick={handleClickClose}>
                                    <CloseIcon />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default Login;
