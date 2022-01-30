import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./App/store";
import Snackbar from "./components/Snackbar";
import { GridProvider } from './feartures/Foodfeature/GridContext';
import "./index.css";
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
