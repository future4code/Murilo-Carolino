import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TripsPage from "../pages/TripsPage/TripsPage";
import ApplicationPage from "../pages/ApplicationPage/ApplicationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <TripsPage />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminPage />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router