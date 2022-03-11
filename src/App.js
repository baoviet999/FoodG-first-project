import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./App.scss";
import FlashScreen from "./components/FlashScreen/FlashScreen";
import Header from "./components/Header";
import DetailPage from "./feartures/Foodfeature/pages/DetailPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import OrderPage from "./Pages/Order";
function App() {
    const type = useSelector((state) => state.food.type);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return ()=> clearTimeout(timer)
    },[])
    return (
        <>
            {loading ? (
                <FlashScreen />
            ) : (
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
            )}
        </>
    );
}

export default App;
