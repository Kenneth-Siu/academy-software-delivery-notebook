import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
    return (
        <main className="home-page">
            <h1>Notebook Cookbook</h1>
            <div className="links">
                <Link to="/shopping-list">
                    <span className="emoji">🛒</span>
                    <span className="text">Shopping List</span>
                </Link>
                <Link to="/cookbook">
                    <span className="emoji">🍳</span>
                    <span className="text">Cookbook</span>
                </Link>
            </div>
        </main>
    );
}
