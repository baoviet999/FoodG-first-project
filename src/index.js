import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";
import Snackbar from "./components/Snackbar";
import { Provider } from "react-redux";
import store from "./App/store";
import {GridProvider} from './feartures/Foodfeature/GridContext'
// import "swiper/css/bundle";
ReactDOM.render(
    <React.StrictMode>
        <GridProvider>
            <Provider store={store}>
                <Snackbar>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Snackbar>
            </Provider>
        </GridProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
