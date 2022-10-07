import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import ShoppingList from "./shoppingList/ShoppingList";
import "./cssreset.css";
import "./App.scss";
import Cookbook from "./cookbook/Cookbook";

const App = () => (
    <>
        <title>Notebook Cookbook</title>
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route exact={true} path="/shopping-list">
                <ShoppingList />
            </Route>
            <Route exact={true} path="/cookbook">
                <Cookbook />
            </Route>
        </Switch>
    </>
);

export default App;
