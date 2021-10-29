import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"



function Router({setRightButtonText}) {
    return (
        <Switch>
            <Route exact path={"/login"}>
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path={"/cadastro"}>
                <SignUpPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path={"/"}>
                <FeedPage />
            </Route>
            <Route exact path={"/detalhe/:id"}>
                <PostDetailsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router