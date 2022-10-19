import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import SkillsCoaches from "./skillsCoaches/SkillsCoaches";
import "./cssreset.css";
import "./App.scss";
import Trainers from "./trainers/Trainers";

const App = () => (
    <>
        <title>Academy Software Delivery Notebook</title>
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route exact={true} path="/skills-coaches">
                <SkillsCoaches />
            </Route>
            <Route exact={true} path="/trainers">
                <Trainers />
            </Route>
        </Switch>
    </>
);

export default App;
