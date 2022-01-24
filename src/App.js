import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./App.scss";
import Header from "./components/Header";
import DetailPage from "./feartures/Foodfeature/pages/DetailPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import OrderPage from "./Pages/Order";
function App() {
    const type = useSelector((state) => state.food.type);
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/order">
                    <OrderPage />
                </Route>
                <Route path={`/detail${type}/:foodId`}>
                    <DetailPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
