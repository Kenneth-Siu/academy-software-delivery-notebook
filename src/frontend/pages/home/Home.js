import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
    return (
        <main className="home-page">
            <h1>Academy Software Delivery Notebook</h1>
            <div className="links">
                <Link to="/skills-coaches">
                    <span className="emoji">🚌</span>
                    <span className="text">Skills Coaches</span>
                </Link>
                <Link to="/trainers">
                    <span className="emoji">👟</span>
                    <span className="text">Trainers</span>
                </Link>
            </div>
        </main>
    );
}
